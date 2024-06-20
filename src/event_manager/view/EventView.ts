import { isFunction, isString, isUndefined } from 'underscore';
import { $, SetOptions, View } from '../../common';
import Component from '../../dom_components/model/Component';
import EditorModel from '../../editor/model/Editor';
import { capitalize } from '../../utils/mixins';
import Event from '../model/Event';

export default class EventView extends View<Event> {
  pfx: string;
  ppfx: string;
  config: any;
  clsField: string;
  eventxelInput!: HTMLInputElement;
  handlerelInput!: HTMLInputElement;
  elInput!: HTMLInputElement;
  einput?: HTMLInputElement;
  hinput?: HTMLInputElement;
  input?: HTMLInputElement;
  $einput?: JQuery<HTMLInputElement>;
  $hinput?: JQuery<HTMLInputElement>;
  $input?: JQuery<HTMLInputElement>;
  eventCapture!: string[];
  noLabel?: boolean;
  em: EditorModel;
  target: Component;
  createLabel?: (data: { label: string; component: Component; event: EventView }) => string | HTMLElement;
  createInput?: (data: ReturnType<EventView['getClbOpts']>) => string | HTMLElement;

  events: any = {};

  appendInput = true;

  /** @ts-ignore */
  attributes() {
    return this.model.get('attributes') || {};
  }

  templateLabel(cmp?: Component) {
    const { ppfx } = this;
    const label = this.getLabel();
    return `<div class="${ppfx}label" title="${label}">${label}</div>`;
  }

  arrowtemplate() {
    const { ppfx } = this;
    return `<div class="${ppfx}sel-arrow">  <div class="${ppfx}d-s-arrow"></div>  </div>`;
  }

  templateInput(data: ReturnType<EventView['getClbOpts']>, target: string) {
    const { ppfx, clsField } = this;
    return `<div class="${clsField}">
      <div ${target}-input></div>
      ${target !== 'data' ? this.arrowtemplate() : ''}
    </div>`;
  }

  constructor(o: any = {}) {
    super(o);
    const { config = {} } = o;
    const { model, eventCapture } = this;
    const { target } = model;
    this.config = config;
    this.em = config.em;
    this.ppfx = config.pStylePrefix || '';
    this.pfx = this.ppfx + config.stylePrefix || '';
    this.target = target;
    const { ppfx } = this;
    this.clsField = `${ppfx}field ${ppfx}field-select`;
    const evToListen: [string, any][] = [
      ['change:value', this.onValueChange],
      ['remove', this.removeView],
    ];
    evToListen.forEach(([event, clb]) => {
      model.off(event, clb);
      this.listenTo(model, event, clb);
    });
    model.view = this;
    this.listenTo(model, 'change:label', this.render);
    this.listenTo(model, 'change:placeholder', this.rerender);
    this.listenTo(this.em, 'change:Events', this.rerender);

    this.events = {};
    eventCapture.forEach(event => (this.events[event] = 'onChange'));
    this.delegateEvents();
    this.init();
  }

  getClbOpts() {
    return {
      component: this.target,
      event: this.model,
      eventxelInput: this.getEInputElem(),
      handlerelInput: this.getHInputElem(),
      elInput: this.getInputElem(),
    };
  }

  removeView() {
    this.remove();
    this.removed();
  }

  init() {}
  removed() {}
  onRender(props: ReturnType<EventView['getClbOpts']>) {}
  onUpdate(props: ReturnType<EventView['getClbOpts']>) {}
  onEvent(props: ReturnType<EventView['getClbOpts']> & { event: Event }) {}

  /**
   * Fires when the input is changed
   * @private
   */
  onChange(event: Event) {
    const { type } = this.model.attributes;
    let eel = this.getEInputElem(),
      hel = this.getHInputElem(),
      el = this.getInputElem();
    if (hel.value === 'newhandler') {
      this.em.Editor.runCommand('blockly-script', { value: hel.value, name: '&#43 New Handler' });
    } else {
      if (type === 'NotCustomized') {
        if (eel && !isUndefined(eel.value) && hel && !isUndefined(hel.value)) {
          this.model.set('value', [eel.value, hel.value]);
        }
      } else {
        if (hel && !isUndefined(hel.value)) {
          this.model.set('value', [
            this.model.getEventx()?.find(event => event.name === this.model.getLabel())?.value,
            hel.value,
          ]);
        }
      }
      if (el && !isUndefined(el.value)) {
        this.model.set('url', el.value);
      }
      if (el && !isUndefined(el.value)) {
        this.model.set('page', el.value);
      }
    }
    this.onEvent({
      ...this.getClbOpts(),
      event,
    });
    this.render();
  }

  getValueForTarget() {
    return this.model.get('value');
  }

  setEInputValue(value: string) {
    const el = this.getEInputElem();
    el && (el.value = value);
  }
  setHInputValue(value: string) {
    const el = this.getHInputElem();
    el && (el.value = value);
  }

  /**
   * On change callback
   * @private
   */
  onValueChange(model: Event, value: string, opts: SetOptions & { fromTarget?: boolean } = {}) {
    if (opts.fromTarget) {
      this.postUpdate();
    } else {
      const val = this.getValueForTarget();
      model.setTargetValue(val, opts);
    }
  }

  /**
   * Render label
   * @private
   */
  renderLabel() {
    const { $el, target } = this;
    const label = this.getLabel();
    let tpl: string | HTMLElement = this.templateLabel(target);

    if (this.createLabel) {
      tpl =
        this.createLabel({
          label,
          component: target,
          event: this,
        }) || '';
    }

    $el.find('[data-label]').append(tpl);
  }

  /**
   * Returns label for the input
   * @return {string}
   * @private
   */
  getLabel() {
    const { em } = this;
    const { label, name } = this.model.attributes;
    return em.t(`eventManager.events.labels.${name}`) || capitalize(label || name).replace(/-/g, ' ');
  }

  /**
   * Returns current target component
   */
  getComponent() {
    return this.target;
  }

  /**
   * Returns input element
   * @return {HTMLElement}
   * @private
   */
  getInputEl() {
    if (!this.$input) {
      const { em, model } = this;
      const md = model;
      const { name } = model.attributes;
      const placeholder = md.get('placeholder') || md.get('default') || '';
      const type = 'text';
      const min = md.get('min');
      const max = md.get('max');
      const value = [''];
      const input: JQuery<HTMLInputElement> = $(`<input type="${type}">`);
      const i18nAttr = em.t(`eventManager.events.attributes.${name}`) || {};
      input.attr({
        placeholder,
        ...i18nAttr,
      });

      if (!isUndefined(value)) {
        md.set({ value }, { silent: true });
        input.prop('value', value);
      }

      if (min) {
        input.prop('min', min);
      }

      if (max) {
        input.prop('max', max);
      }

      this.$input = input;
    }
    return this.$input!.get(0);
  }
  getEventInputEl() {
    if (!this.$einput) {
      const { model, em } = this;
      const propName = model.get('name');
      const opts = model.get('eventx') || [];
      const values: string[] = [];
      let input = '<select>';

      opts.forEach(el => {
        let attrs = '';
        let name, value, style;

        if (isString(el)) {
          name = el;
          value = el;
        } else {
          name = el.name || el.label || el.value;
          value = `${isUndefined(el.value) ? el.id : el.value}`.replace(/"/g, '&quot;');
          style = el.style ? el.style.replace(/"/g, '&quot;') : '';
          attrs += style ? ` style="${style}"` : '';
        }
        const resultName = name;
        input += `<option value="${value}"${attrs}>${resultName}</option>`;
        values.push(value);
      });

      input += '</select>';
      this.$einput = $(input);
      const val = model.getTargetValue()[0];
      const valResult = values.indexOf(val) >= 0 ? val : model.get('default');
      !isUndefined(valResult) && this.$einput!.val(valResult);
    }

    return this.$einput!.get(0);
  }

  getHandlerInputEl() {
    if (!this.$hinput) {
      const { model, em } = this;
      const propName = model.get('name');
      const opts = model.get('handler') || [];
      const values: string[] = [];
      let input = '<select>';

      opts.forEach(el => {
        let attrs = '';
        let name, value, style;

        if (isString(el)) {
          name = el;
          value = el;
        } else {
          name = el.name || el.label || el.value;
          value = `${isUndefined(el.value) ? el.id : el.value}`.replace(/"/g, '&quot;');
          style = el.style ? el.style.replace(/"/g, '&quot;') : '';
          attrs += style ? ` style="${style}"` : '';
        }
        const resultName = name;
        input += `<option value="${value}"${attrs}>${resultName}</option>`;
        values.push(value);
      });

      input += '</select>';
      this.$hinput = $(input);
      const val = model.getTargetValue()[1];
      const valResult = values.indexOf(val) >= 0 ? val : model.get('default');
      !isUndefined(valResult) && this.$hinput!.val(valResult);
    }

    return this.$hinput!.get(0);
  }

  getEInputElem() {
    const { einput, $einput } = this;
    return einput || ($einput && $einput.get && $einput.get(0)) || this.getEElInput();
  }
  getHInputElem() {
    const { hinput, $hinput } = this;
    return hinput || ($hinput && $hinput.get && $hinput.get(0)) || this.getHElInput();
  }
  getInputElem() {
    const { input, $input } = this;
    return input || ($input && $input.get && $input.get(0)) || this.getElInput();
  }

  getModelValue() {
    let value;
    const model = this.model;
    const target = this.target;
    const name = model.getName();

    if (model.get('changeProp')) {
      value = target.get(name);
    } else {
      const attrs = target.get('attributes')!;
      value = model.get('value') || attrs[name];
    }

    return !isUndefined(value) ? value : '';
  }

  getEElInput() {
    return this.eventxelInput;
  }
  getHElInput() {
    return this.handlerelInput;
  }
  getElInput() {
    return this.elInput;
  }

  /**
   * Renders input
   * @private
   * */
  renderEventField() {
    const { $el, appendInput, model } = this;
    const eel = $el.find('[eventx-input]')[0];
    let etpl: HTMLElement | string | undefined = model.el;

    if (!etpl) {
      etpl = this.getEventInputEl();
    }

    if (isString(etpl)) {
      eel.innerHTML = etpl;
      this.eventxelInput = eel.firstChild as HTMLInputElement;
    } else {
      appendInput ? eel.appendChild(etpl!) : eel.insertBefore(etpl!, eel.firstChild);
      this.eventxelInput = etpl as HTMLInputElement;
    }
    const el = $el.find('[handler-input]')[0];
    let htpl: HTMLElement | string | undefined = model.el;
    if (!htpl) {
      htpl = this.getHandlerInputEl();
    }

    if (isString(htpl)) {
      el.innerHTML = htpl;
      this.handlerelInput = el.firstChild as HTMLInputElement;
    } else {
      appendInput ? el.appendChild(htpl!) : el.insertBefore(htpl!, el.firstChild);
      this.handlerelInput = htpl as HTMLInputElement;
    }
  }
  renderHandlerData() {
    const { $el, appendInput, model } = this;
    const inputs = $el.find('[data-input]');
    const el = inputs[0];
    let tpl: HTMLElement | string | undefined = model.el;

    if (!tpl) {
      tpl = this.getInputEl();
    }
    if (isString(tpl)) {
      el.innerHTML = tpl;
      this.elInput = el.firstChild as HTMLInputElement;
    } else {
      appendInput ? el.appendChild(tpl!) : el.insertBefore(tpl!, el.firstChild);
      this.elInput = tpl as HTMLInputElement;
    }
  }

  hasLabel() {
    const { label } = this.model.attributes;
    return !this.noLabel && label !== false;
  }

  rerender() {
    delete this.model.el;
    this.render();
  }

  postUpdate() {
    this.onUpdate(this.getClbOpts());
  }

  render() {
    const { $el, pfx, ppfx, model } = this;
    const { type, id } = model.attributes;
    // const hasLabel = this.hasLabel && this.hasLabel();
    const cls = `${pfx}event`;
    delete this.$hinput;
    delete this.$einput;
    let tmpl = `<div class="${cls}">
      <div class="${ppfx}label-wrp" data-label>
        <div class="gjs-label" title="Event">Event</div>
      </div>
      <div class="${ppfx}field-wrp ${ppfx}field-wrp--select">
        ${
          this.templateInput
            ? isFunction(this.templateInput)
              ? this.templateInput(this.getClbOpts(), 'eventx')
              : this.templateInput
            : ''
        }
      </div>
    </div>`;
    tmpl += `<div class="${cls}">
      <div class="${ppfx}label-wrp" data-label>
        <div class="gjs-label" title="Handler">Handler</div>
      </div>
      <div class="${ppfx}field-wrp ${ppfx}field-wrp--select">
        ${
          this.templateInput
            ? isFunction(this.templateInput)
              ? this.templateInput(this.getClbOpts(), 'handler')
              : this.templateInput
            : ''
        }
      </div>
    </div>`;
    if (model.getTargetValue()[1] == 'redirecttourl') {
      tmpl += `<div class="${cls}">
      <svg width="25" height="20">
        <polyline points="1,0 1,10 10,10" fill="none" stroke="gray" stroke-width="1">
      </svg>
      <div class="${ppfx}label-wrp" data-label>
        <div class="gjs-label" title="URL">URL</div>
      </div>
      <div class="${ppfx}field-wrp ${ppfx}field-wrp--select">
         ${
           this.templateInput
             ? isFunction(this.templateInput)
               ? this.templateInput(this.getClbOpts(), 'data')
               : this.templateInput
             : ''
         }
      </div>
      </div>`;
    }
    if (model.getTargetValue()[1] == 'redirecttopage') {
      tmpl += `<div class="${cls}">
      <svg width="25" height="20">
        <polyline points="1,0 1,10 10,10" fill="none" stroke="gray" stroke-width="1">
      </svg>
      <div class="${ppfx}label-wrp" data-label>
        <div class="gjs-label" title="Go to Page">Go to Page</div>
      </div>
      <div class="${ppfx}field-wrp ${ppfx}field-wrp--select">
         ${
           this.templateInput
             ? isFunction(this.templateInput)
               ? this.templateInput(this.getClbOpts(), 'data')
               : this.templateInput
             : ''
         }
      </div>
      </div>`;
    }
    $el.empty().append(tmpl);
    this.renderEventField();
    if (model.getTargetValue()[1] == 'redirecttourl') {
      this.renderHandlerData();
    }
    if (model.getTargetValue()[1] == 'redirecttopage') {
      this.renderHandlerData();
    }

    this.el.className = `${cls}__wrp ${cls}__wrp-${id}`;
    this.postUpdate();
    this.onRender(this.getClbOpts());
    return this;
  }
}
EventView.prototype.eventCapture = ['change'];
