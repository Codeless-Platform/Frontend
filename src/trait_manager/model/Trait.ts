import { isString, isUndefined } from 'underscore';
import { Model, SetOptions } from '../../common';
import Component from '../../dom_components/model/Component';
import Editor from '../../editor';
import EditorModel from '../../editor/model/Editor';
import TraitView from '../view/TraitView';
import { isDef } from '../../utils/mixins';

/** @private */
export interface TraitProperties {
  /**
   * Trait type, defines how the trait should rendered.
   * Possible values: `text` (default), `number`, `select`, `checkbox`, `color`, `button`
   */
  type?: string;

  /**
   * The name of the trait used as a key for the attribute/property.
   * By default, the name is used as attribute name or property in case `changeProp` in enabled.
   */
  name: string;

  /**
   * Trait id, eg. `my-trait-id`.
   * If not specified, the `name` will be used as id.
   */
  id?: string;

  /**
   * The trait label to show for the rendered trait.
   */
  label?: string | false;

  /**
   * If `true` the trait value is applied on component
   */
  changeProp?: boolean;

  attributes?: Record<string, any>;
  valueTrue?: string;
  valueFalse?: string;
  min?: number;
  max?: number;
  unit?: string;
  step?: number;
  value?: any;
  target?: Component;
  default?: any;
  placeholder?: string;
  command?: string | ((editor: Editor, trait: Trait) => any);
  options?: Record<string, any>[];
  labelButton?: string;
  text?: string;
  full?: boolean;
  getValue?: (props: { editor: Editor; trait: Trait; component: Component }) => any;
  setValue?: (props: {
    value: any;
    editor: Editor;
    trait: Trait;
    component: Component;
    partial: boolean;
    emitUpdate: () => void;
  }) => void;
}

type TraitOption = {
  id: string;
  label?: string;
};

/**
 * @typedef Trait
 * @property {String} id Trait id, eg. `my-trait-id`.
 * @property {String} type Trait type, defines how the trait should rendered. Possible values: `text` (default), `number`, `select`, `checkbox`, `color`, `button`
 * @property {String} label The trait label to show for the rendered trait.
 * @property {String} name The name of the trait used as a key for the attribute/property. By default, the name is used as attribute name or property in case `changeProp` in enabled.
 * @property {Boolean} changeProp If `true` the trait value is applied on component
 *
 */
export default class Trait extends Model<TraitProperties> {
  target!: Component;

  em: EditorModel;
  view?: TraitView;
  el?: HTMLElement;

  defaults() {
    return {
      type: 'text',
      label: '',
      name: '',
      unit: '',
      step: 1,
      value: '',
      default: '',
      placeholder: '',
      target: this.target,
      changeProp: false,
      options: [],
    };
  }

  constructor(prop: TraitProperties, em: EditorModel) {
    super(prop);
    const { target, name } = this.attributes;
    !this.get('id') && this.set('id', name);
    if (target) {
      this.setTarget(target);
    }
    this.em = em;
  }

  setTarget(target: Component) {
    if (target) {
      const { name, changeProp, value: initValue } = this.attributes;
      this.target = target;
      this.unset('target');
      const targetEvent = changeProp ? `change:${name}` : `change:attributes:${name}`;
      this.listenTo(target, targetEvent, this.targetUpdated);
      const value = initValue || this.getValue();
      !isUndefined(value) && this.set({ value }, { silent: true });
    }
  }

  /**
   * Get the trait id.
   * @returns {String}
   */
  getId() {
    return this.get('id')!;
  }

  /**
   * Get the trait type.
   * @returns {String}
   */
  getType() {
    return this.get('type')!;
  }

  /**
   * Get the trait name.
   * @returns {String}
   */
  getName() {
    return this.get('name')!;
  }

  /**
   * Get the trait label.
   * @param {Object} [opts={}] Options.
   * @param {Boolean} [opts.locale=true] Use the locale string from i18n module.
   * @returns {String}
   */
  getLabel(opts: { locale?: boolean } = {}) {
    const { locale = true } = opts;
    const id = this.getId();
    const name = this.get('label') || this.getName();
    return (locale && this.em?.t(`traitManager.traits.labels.${id}`)) || name;
  }

  /**
   * Get the trait value.
   * The value is taken from component attributes by default or from properties if the trait has the `changeProp` enabled.
   * @returns {any}
   */
  getValue() {
    return this.getTargetValue();
  }

  /**
   * Update the trait value.
   * The value is applied on component attributes by default or on properties if the trait has the `changeProp` enabled.
   * @param {any} value Value of the trait.
   * @param {Object} [opts={}] Options.
   * @param {Boolean} [opts.partial] If `true` the update won't be considered complete (not stored in UndoManager).
   */
  setValue(value: any, opts: { partial?: boolean } = {}) {
    const valueOpts: { avoidStore?: boolean } = {};
    const setValue = this.get('setValue');

    if (setValue) {
      setValue({
        value,
        editor: this.em?.getEditor()!,
        trait: this,
        component: this.target,
        partial: !!opts.partial,
        emitUpdate: () => this.targetUpdated(),
      });
      return;
    }

    if (opts.partial) {
      valueOpts.avoidStore = true;
    }

    this.setTargetValue(value, valueOpts);

    if (opts.partial === false) {
      this.setTargetValue('');

      this.setTargetValue(value);
    }
  }

  /**
   * Get default value.
   */
  getDefault() {
    return this.get('default');
  }

  /**
   * Get trait options.
   */
  getOptions(): TraitOption[] {
    return (this.get('options') as TraitOption[]) || [];
  }

  /**
   * Get current selected option or by id.
   * @param {String} [id] Option id.
   * @returns {Object | null}
   */
  getOption(id?: string): TraitOption | undefined {
    const idSel = isDef(id) ? id : this.getValue();
    return this.getOptions().filter(o => this.getOptionId(o) === idSel)[0];
  }

  /**
   * Get the option id from the option object.
   * @param {Object} option Option object
   * @returns {String} Option id
   */
  getOptionId(option: TraitOption) {
    return option.id || (option as any).value;
  }

  /**
   * Get option label.
   * @param {String|Object} id Option id or the option object
   * @param {Object} [opts={}] Options
   * @param {Boolean} [opts.locale=true] Use the locale string from i18n module
   * @returns {String} Option label
   */
  getOptionLabel(id: string | TraitOption, opts: { locale?: boolean } = {}): string {
    const { locale = true } = opts;
    const option = (isString(id) ? this.getOption(id) : id)!;
    const optId = this.getOptionId(option);
    const label = option.label || (option as any).name || optId;
    const propName = this.getName();
    return (locale && this.em?.t(`traitManager.traits.options.${propName}.${optId}`)) || label;
  }

  props() {
    return this.attributes;
  }

  targetUpdated() {
    const value = this.getTargetValue();
    this.set({ value }, { fromTarget: 1 });
    this.em?.trigger('trait:update', {
      trait: this,
      component: this.target,
    });
  }

  getTargetValue() {
    const name = this.getName();
    const target = this.target;
    const getValue = this.get('getValue');
    let value;

    if (getValue) {
      value = getValue({
        editor: this.em?.getEditor()!,
        trait: this,
        component: target,
      });
    } else if (this.get('changeProp')) {
      value = target.get(name);
    } else {
      // @ts-ignore TODO update post component update
      value = target.getAttributes()[name];
    }

    return !isUndefined(value) ? value : '';
  }

  setTargetValue(value: any, opts: SetOptions = {}) {
    const { target, attributes } = this;
    const name = this.getName();
    if (isUndefined(value)) return;
    let valueToSet = value;

    if (value === 'false') {
      valueToSet = false;
    } else if (value === 'true') {
      valueToSet = true;
    }

    if (this.getType() === 'checkbox') {
      const { valueTrue, valueFalse } = attributes;

      if (valueToSet && !isUndefined(valueTrue)) {
        valueToSet = valueTrue;
      }

      if (!valueToSet && !isUndefined(valueFalse)) {
        valueToSet = valueFalse;
      }
    }
    if (this.getType() === 'api') {
      const { name, link } = value;
      const apis = target.getAPIs();

      const openErrorModal = (content: string) => {
        this.em.Editor.Modal.open({
          title: 'Error',
          content,
          attributes: { class: 'max-width-500' },
        });
      };

      const handleFetchApi = async (link: string) => {
        try {
          const json = await fetchApi(link);
          valueToSet.json = json;
          return json;
        } catch (error) {
          const l = this.previousAttributes().value ? this.previousAttributes().value.link : '';
          this.set('value', {
            name: name,
            link: l,
          });
          this.view?.setInputValue({
            name: name,
            link: l,
          });
        }
      };

      const fetchApi = async (link: string): Promise<any> => {
        let response;
        try {
          const token = sessionStorage.getItem('jwt');
          const headers: Record<string, string> = {
            'Content-Type': 'application/json',
          };
          if (token) {
            headers.Authorization = `Bearer ${token}`;
          }
          response = await fetch(link, {
            headers,
          });
          if (!response.ok) {
            if (response.status === 403) {
              throw new Error('403');
            } else {
              throw new Error('Network response was not ok');
            }
          }
          const json = await response.json();
          return json;
        } catch (error: unknown) {
          if (error instanceof Error) {
            if (error.message === '403') {
              openErrorModal(
                'This API is Authenticated, You have to use one of Auth blocks and sign in or sign up to get JWT token then fetch this API'
              );
            } else {
              openErrorModal("Can't fetch this API");
            }
          } else {
            openErrorModal('An unknown error occurred');
          }

          throw error;
        }
      };

      const existingApiIndex = apis.findIndex((api: Record<any, any>) => api.link === link);

      if (existingApiIndex !== -1) {
        // adding new link
        const anotherTrait = this.target
          .getTraits()
          .find(trait => trait.attributes.value?.link === link && trait.attributes.name !== this.getName());
        if (anotherTrait && link) {
          this.set('value', {
            name: name,
            link: this.previousAttributes().value ? this.previousAttributes().value.link : '',
          });
          this.view?.setInputValue({
            name: name,
            link: this.previousAttributes().value ? this.previousAttributes().value.link : '',
          });
          openErrorModal('You already added this API');
        } else {
          if (name) {
            const anotherTrait = this.target
              .getTraits()
              .find(trait => trait.attributes.value?.name === name && trait.attributes.name !== this.getName());
            if (anotherTrait) {
              this.set('value', {
                name: this.previousAttributes().value ? this.previousAttributes().value.name : '' || '',
                link: link,
              });
              this.view?.setInputValue({
                name: this.previousAttributes().value ? this.previousAttributes().value.name : '' || '',
                link: link,
              });
              openErrorModal('The API name already exists. Please use a different name.');
            } else {
              const data = target.get(`${this.getName()}`).json;
              target.set(this.getName(), { link: link, name: name, json: data }, opts);
              target.trigger('change:apis', { previousName: this.previousAttributes().value.name, currentName: name });
            }
          }
        }
      } else {
        if (link) {
          handleFetchApi(link).then(() => {
            if (valueToSet.json) {
              target.set(this.getName(), valueToSet, opts);
              target.trigger('change:apis');
            }
          });
        } else if (name) {
          const anotherTrait = this.target
            .getTraits()
            .find(trait => trait.attributes.value?.name === name && trait.attributes.name !== this.getName());
          if (anotherTrait) {
            this.view?.setInputValue({
              name: this.previousAttributes().value ? this.previousAttributes().value.name : '' || '',
              link: link,
            });
            openErrorModal('The API name already exists. Please use a different name.');
          } else target.set(this.getName(), valueToSet, opts);
        }
      }
    } else if (this.get('changeProp')) {
      target.set(name, valueToSet, opts);
    } else {
      target.addAttributes({ [name]: valueToSet }, opts);
    }
  }

  setValueFromInput(value: any, final = true, opts: SetOptions = {}) {
    const toSet = { value };
    this.set(toSet, { ...opts, avoidStore: 1 });

    // Have to trigger the change
    if (final) {
      this.set('value', '', opts);
      this.set(toSet, opts);
    }
  }

  getInitValue() {
    const target = this.target;
    const name = this.getName();
    let value;

    if (target) {
      const attrs = target.get('attributes')!;
      value = this.get('changeProp') ? target.get(name) : attrs[name];
    }

    return value || this.get('value') || this.get('default');
  }
}
