import { isString, isUndefined } from 'underscore';
import { Model, SetOptions } from '../../common';
import Component from '../../dom_components/model/Component';
import Editor from '../../editor';
import EditorModel from '../../editor/model/Editor';
import AnimationView from '../view/AnimationView';
import { isDef } from '../../utils/mixins';

/** @private */
export interface AnimationProperties {
  /**
   * animation type, defines how the animation should rendered.
   * Possible values: `text` (default), `number`, `select`, `checkbox`, `color`, `button`
   */
  type?: string;

  /**
   * The name of the animation used as a key for the attribute/property.
   * By default, the name is used as attribute name or property in case `changeProp` in enabled.
   */
  name: string;

  /**
   * animation id, eg. `my-animation-id`.
   * If not specified, the `name` will be used as id.
   */
  id?: string;

  /**
   * The animation label to show for the rendered animation.
   */
  label?: string | false;

  /**
   * If `true` the animation value is applied on component
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
  command?: string | ((editor: Editor, animation: Animation) => any);
  options?: Record<string, any>[];
  labelButton?: string;
  text?: string;
  full?: boolean;
  getValue?: (props: { editor: Editor; animation: Animation; component: Component }) => any;
  setValue?: (props: {
    value: any;
    editor: Editor;
    animation: Animation;
    component: Component;
    partial: boolean;
    emitUpdate: () => void;
  }) => void;
}

type AnimationOption = {
  id: string;
  label?: string;
};

/**
 * @typedef animation
 * @property {String} id animation id, eg. `my-animation-id`.
 * @property {String} type animation type, defines how the animation should rendered. Possible values: `text` (default), `number`, `select`, `checkbox`, `color`, `button`
 * @property {String} label The animation label to show for the rendered animation.
 * @property {String} name The name of the animation used as a key for the attribute/property. By default, the name is used as attribute name or property in case `changeProp` in enabled.
 * @property {Boolean} changeProp If `true` the animation value is applied on component
 *
 */
export default class Animation extends Model<AnimationProperties> {
  target!: Component;

  em: EditorModel;
  view?: AnimationView;
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

  constructor(prop: AnimationProperties, em: EditorModel) {
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
   * Get the animation id.
   * @returns {String}
   */
  getId() {
    return this.get('id')!;
  }

  /**
   * Get the animation type.
   * @returns {String}
   */
  getType() {
    return this.get('type')!;
  }

  /**
   * Get the animation name.
   * @returns {String}
   */
  getName() {
    return this.get('name')!;
  }

  /**
   * Get the animation label.
   * @param {Object} [opts={}] Options.
   * @param {Boolean} [opts.locale=true] Use the locale string from i18n module.
   * @returns {String}
   */
  getLabel(opts: { locale?: boolean } = {}) {
    const { locale = true } = opts;
    const id = this.getId();
    const name = this.get('label') || this.getName();
    return (locale && this.em?.t(`animationManager.animations.labels.${id}`)) || name;
  }

  /**
   * Get the animation value.
   * The value is taken from component attributes by default or from properties if the animation has the `changeProp` enabled.
   * @returns {any}
   */
  getValue() {
    return this.getTargetValue();
  }

  /**
   * Update the animation value.
   * The value is applied on component attributes by default or on properties if the animation has the `changeProp` enabled.
   * @param {any} value Value of the animation.
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
        animation: this,
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
   * Get animation options.
   */
  getOptions(): AnimationOption[] {
    return (this.get('options') as AnimationOption[]) || [];
  }

  /**
   * Get current selected option or by id.
   * @param {String} [id] Option id.
   * @returns {Object | null}
   */
  getOption(id?: string): AnimationOption | undefined {
    const idSel = isDef(id) ? id : this.getValue();
    return this.getOptions().filter(o => this.getOptionId(o) === idSel)[0];
  }

  /**
   * Get the option id from the option object.
   * @param {Object} option Option object
   * @returns {String} Option id
   */
  getOptionId(option: AnimationOption) {
    return option.id || (option as any).value;
  }

  /**
   * Get option label.
   * @param {String|Object} id Option id or the option object
   * @param {Object} [opts={}] Options
   * @param {Boolean} [opts.locale=true] Use the locale string from i18n module
   * @returns {String} Option label
   */
  getOptionLabel(id: string | AnimationOption, opts: { locale?: boolean } = {}): string {
    const { locale = true } = opts;
    const option = (isString(id) ? this.getOption(id) : id)!;
    const optId = this.getOptionId(option);
    const label = option.label || (option as any).name || optId;
    const propName = this.getName();
    return (locale && this.em?.t(`animationManager.animations.options.${propName}.${optId}`)) || label;
  }

  props() {
    return this.attributes;
  }

  targetUpdated() {
    const value = this.getTargetValue();
    this.set({ value }, { fromTarget: 1 });
    this.em?.trigger('animation:update', {
      animation: this,
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
        animation: this,
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

    if (this.get('changeProp')) {
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
