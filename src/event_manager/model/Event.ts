import { isString, isUndefined } from 'underscore';
import { Model, SetOptions } from '../../common';
import Component from '../../dom_components/model/Component';
import Editor from '../../editor';
import EditorModel from '../../editor/model/Editor';
import EventView from '../view/EventView';
import { isDef } from '../../utils/mixins';

/** @private */
export interface EventProperties {
  /**
   * Event type, defines how the event should rendered.
   * Possible values: `text` (default), `number`, `select`, `checkbox`, `color`, `button`
   */
  type?: string;

  /**
   * The name of the event used as a key for the attribute/property.
   * By default, the name is used as attribute name or property in case `changeProp` in enabled.
   */
  name: string;

  /**
   * Event id, eg. `my-event-id`.
   * If not specified, the `name` will be used as id.
   */
  id?: string;

  /**
   * The event label to show for the rendered event.
   */
  label?: string | false;

  /**
   * If `true` the event value is applied on component
   */
  changeProp?: boolean;
  eventx?: Record<string, any>[];
  eventx2?: Record<string, any>[];

  handler?: Record<string, any>[];

  attributes?: Record<string, any>;
  valueTrue?: string;
  valueFalse?: string;
  min?: number;
  max?: number;
  unit?: string;
  step?: number;
  value?: string[];
  target?: Component;
  url?: string;
  default?: any;
  placeholder?: string;
  command?: string | ((editor: Editor, event: Event) => any);
  options?: Record<string, any>[];
  labelButton?: string;
  text?: string;
  full?: boolean;
  getValue?: (props: { editor: Editor; event: Event; component: Component }) => any;
  setValue?: (props: {
    value: any;
    editor: Editor;
    event: Event;
    component: Component;
    partial: boolean;
    emitUpdate: () => void;
  }) => void;
}

type EventOption = {
  id: string;
  label?: string;
};

/**
 * @typedef Event
 * @property {String} id Event id, eg. `my-event-id`.
 * @property {String} type Event type, defines how the event should rendered. Possible values: `text` (default), `number`, `select`, `checkbox`, `color`, `button`
 * @property {String} label The event label to show for the rendered event.
 * @property {String} name The name of the event used as a key for the attribute/property. By default, the name is used as attribute name or property in case `changeProp` in enabled.
 * @property {Boolean} changeProp If `true` the event value is applied on component
 *
 */
export default class Event extends Model<EventProperties> {
  target!: Component;
  em: EditorModel;
  view?: EventView;
  el?: HTMLElement;
  events: any = {};
  eventCapture!: string[];

  defaults() {
    return {
      name: '',
      id: '',
      default: '',
      eventx: [
        { value: 'click', name: 'onclick' },
        { value: 'dblclick', name: 'ondoubleclick' },
        {
          value: 'none',
          name: 'none',
        },
      ],

      handler: [
        { value: 'fullscreen', name: 'fullscreen' },
        { value: 'resize', name: 'resize' },
        { value: 'redirect to url', name: 'redirect to url' },

        {
          value: 'none',
          name: 'none',
        },
      ],
      placeholder: '',
      url: '',
      target: this.target,
      changeProp: true,
    };
  }

  constructor(prop: EventProperties, em: EditorModel) {
    super(prop);
    const { target, name } = this.attributes;
    !this.get('id') && this.set('id', name);
    if (target) {
      this.setTarget(target);
    }
    this.em = em;
    this.on('change', this.updateScript);
  }

  updateScript() {
    let Allevents = this.target.getEvents();
    if (Allevents[Allevents.length - 1] == this && Allevents[Allevents.length - 1].getValue()[0]) {
      this.target.addEvent([Allevents.length.toString()]);
    }

    let s = `var ${this.target.getId()} = document.querySelector('#${this.target.getId()}');`;
    let flag = false;
    Allevents.forEach(event => {
      let eventsValue = event.getValue()[0],
        handlresValue = event.getValue()[1];
      if (eventsValue !== 'none' && !isUndefined(eventsValue) && eventsValue !== '') {
        s += `element.addEventListener('${eventsValue}', function(event) {`;
        if (handlresValue === 'fullscreen') {
          flag = true;
          s += 'element.requestFullscreen();});';
        } else if (handlresValue === 'resize') {
          flag = true;
          s += 'element.style.width="200px";});';
        } else if (handlresValue === 'redirect to url' && event.getUrl() != '') {
          flag = true;
          s += `window.location.href = '${event.getUrl()}';});`;
        } else if (handlresValue === 'none') {
          event.setValue([eventsValue, '']);
        }
      } else {
        event.setValue(['', handlresValue]);
      }
    });
    if (!flag) s = '';
    this.target.set('script', s);
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
   * Get the event id.
   * @returns {String}
   */
  getId() {
    return this.get('id')!;
  }

  /**
   * Get the event type.
   * @returns {String}
   */
  getType() {
    return this.get('type')!;
  }
  getEventx() {
    return this.get('eventx');
  }
  getHandler() {
    return this.get('handler');
  }
  getUrl() {
    return this.get('url');
  }

  /**
   * Get the event name.
   * @returns {String}
   */
  getName() {
    return this.get('name')!;
  }

  /**
   * Get the event label.
   * @param {Object} [opts={}] Options.
   * @param {Boolean} [opts.locale=true] Use the locale string from i18n module.
   * @returns {String}
   */
  getLabel(opts: { locale?: boolean } = {}) {
    const { locale = true } = opts;
    const id = this.getId();
    const name = this.get('label') || this.getName();
    return (locale && this.em?.t(`eventManager.events.labels.${id}`)) || name;
  }

  /**
   * Get the event value.
   * The value is taken from component attributes by default or from properties if the event has the `changeProp` enabled.
   * @returns {any}
   */
  getValue() {
    return this.getTargetValue();
  }

  /**
   * Update the event value.
   * The value is applied on component attributes by default or on properties if the event has the `changeProp` enabled.
   * @param {any} value Value of the event.
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
        event: this,
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
   * Get event options.
   */
  getOptions(): EventOption[] {
    return (this.get('options') as EventOption[]) || [];
  }

  /**
   * Get current selected option or by id.
   * @param {String} [id] Option id.
   * @returns {Object | null}
   */
  getOption(id?: string): EventOption | undefined {
    const idSel = isDef(id) ? id : this.getValue();
    return this.getOptions().filter(o => this.getOptionId(o) === idSel)[0];
  }

  /**
   * Get the option id from the option object.
   * @param {Object} option Option object
   * @returns {String} Option id
   */
  getOptionId(option: EventOption) {
    return option.id || (option as any).value;
  }

  /**
   * Get option label.
   * @param {String|Object} id Option id or the option object
   * @param {Object} [opts={}] Options
   * @param {Boolean} [opts.locale=true] Use the locale string from i18n module
   * @returns {String} Option label
   */
  getOptionLabel(id: string | EventOption, opts: { locale?: boolean } = {}): string {
    const { locale = true } = opts;
    const option = (isString(id) ? this.getOption(id) : id)!;
    const optId = this.getOptionId(option);
    const label = option.label || (option as any).name || optId;
    const propName = this.getName();
    return (locale && this.em?.t(`eventManager.events.options.${propName}.${optId}`)) || label;
  }

  props() {
    return this.attributes;
  }

  targetUpdated() {
    const value = this.getTargetValue();
    this.set({ value }, { fromTarget: 1 });
    this.em?.trigger('event:update', {
      event: this,
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
        event: this,
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
      this.set('value', [], opts);
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
