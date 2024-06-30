import { isFunction, isString } from 'underscore';
import EventView from './EventView';

export default class CustomEventView extends EventView {
  arrowtemplate() {
    const { ppfx } = this;
    return `<div class="${ppfx}sel-arrow">
            <div class="${ppfx}d-s-arrow"></div>
          </div>`;
  }
  templateInput(data: ReturnType<EventView['getClbOpts']>, target: string) {
    const { ppfx, clsField } = this;
    return `<div class="${clsField}">
      <div ${target}-input></div>
      ${target !== 'data' ? this.arrowtemplate() : ''}
    </div>`;
  }
  renderField() {
    const { $el, appendInput, model } = this;
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
  render() {
    const { $el, pfx, ppfx, model } = this;
    const { id } = model.attributes;
    const hasLabel = this.hasLabel && this.hasLabel();
    const cls = `${pfx}event`;
    delete this.$einput;
    delete this.$hinput;
    delete this.$input;
    const val = model.getTargetValue().handler;
    console.log(val);
    let tmpl = `<div class="${cls}">
      ${hasLabel ? `<div class="${ppfx}label-wrp" data-label></div>` : ''}
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
    if (val == 'redirecttourl') {
      tmpl += `<div class="${cls}">
      <svg width="25" height="20">
        <polyline points="1,0 1,10 10,10" fill="none" stroke="gray" stroke-width="1">
      </svg>
      <div class="${ppfx}label-wrp">
        <div class="gjs-label" title="URL">URL</div>
      </div>
      <div class="${ppfx}field-wrp ${ppfx}field-wrp--select">
         ${
           this.templateInput
             ? isFunction(this.templateInput)
               ? this.templateInput(this.getClbOpts(), 'url')
               : this.templateInput
             : ''
         }
      </div>
      </div>`;
    }
    if (val == 'redirecttopage') {
      tmpl += `<div class="${cls}">
      <svg width="25" height="20">
        <polyline points="1,0 1,10 10,10" fill="none" stroke="gray" stroke-width="1">
      </svg>
      <div class="${ppfx}label-wrp">
        <div class="gjs-label" title="Go to Page">Go to Page</div>
      </div>
      <div class="${ppfx}field-wrp ${ppfx}field-wrp--select">
         ${
           this.templateInput
             ? isFunction(this.templateInput)
               ? this.templateInput(this.getClbOpts(), 'page')
               : this.templateInput
             : ''
         }
      </div>
      </div>`;
    }
    $el.empty().append(tmpl);
    hasLabel && this.renderLabel();
    this.renderField();
    if (val == 'redirecttourl') {
      this.renderHandlerData('url');
    }
    if (val == 'redirecttopage') {
      this.renderHandlerData('page');
    }

    this.el.className = `${cls}__wrp ${cls}__wrp-${id}`;
    this.postUpdate();
    this.onRender(this.getClbOpts());
    return this;
  }
}
CustomEventView.prototype.eventCapture = ['change'];
