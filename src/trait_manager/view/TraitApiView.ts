import { isFunction, isString, isUndefined } from 'underscore';
import TraitView from './TraitView';

export default class TraitApiView extends TraitView {
  templateInput(data: ReturnType<TraitView['getClbOpts']>, target: String) {
    const { clsField } = this;
    return `<div class="${clsField}" ${target}-input></div>`;
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

  getInputEl() {
    if (!this.$input) {
      const { em, model } = this;
      const md = model;
      const { name } = model.attributes;
      const placeholder = 'API Link';
      const type = md.get('type') || 'text';
      const min = md.get('min');
      const max = md.get('max');
      const value = this.getModelValue();
      const input: JQuery<HTMLInputElement> = $(`<input type="${type}">`);
      const i18nAttr = em.t(`traitManager.traits.attributes.${name}`) || {};

      input.attr({
        placeholder,
        ...i18nAttr,
      });

      if (!isUndefined(value)) {
        md.set({ value }, { silent: true });
        input.prop('value', value ? value.link : '');
      }

      if (min) {
        input.prop('min', min);
      }

      if (max) {
        input.prop('max', max);
      }

      this.$input = input;
    }
    return this.$input.get(0);
  }

  getExtraInputEl() {
    if (!this.$extraInput) {
      const { em, model } = this;
      const md = model;
      const { name } = model.attributes;
      const placeholder = 'API Name';
      const type = md.get('type') || 'text';
      const min = md.get('min');
      const max = md.get('max');
      const value = this.getModelValue();
      const input: JQuery<HTMLInputElement> = $(`<input type="${type}">`);
      const i18nAttr = em.t(`traitManager.traits.attributes.${name}`) || {};

      input.attr({
        placeholder,
        ...i18nAttr,
      });

      if (!isUndefined(value)) {
        md.set({ value }, { silent: true });
        input.prop('value', value ? value.name : '');
      }

      if (min) {
        input.prop('min', min);
      }

      if (max) {
        input.prop('max', max);
      }

      this.$extraInput = input;
    }
    return this.$extraInput.get(0);
  }

  renderField() {
    const { $el, appendInput, model } = this;
    let inputs = $el.find('[link-input]');
    let el = inputs[inputs.length - 1];
    let tpl: HTMLElement | string | undefined = model.el;

    if (!tpl) {
      tpl = this.createInput ? this.createInput(this.getClbOpts()) : this.getInputEl();
    }

    if (isString(tpl)) {
      el.innerHTML = tpl;
      this.elInput = el.firstChild as HTMLInputElement;
    } else {
      appendInput ? el.appendChild(tpl!) : el.insertBefore(tpl!, el.firstChild);
      this.elInput = tpl as HTMLInputElement;
    }

    model.el = this.elInput;
    inputs = $el.find('[name-input]');
    el = inputs[inputs.length - 1];

    tpl = this.createInput ? this.createInput(this.getClbOpts()) : this.getExtraInputEl();

    if (isString(tpl)) {
      el.innerHTML = tpl;
      this.elInput = el.firstChild as HTMLInputElement;
    } else {
      appendInput ? el.appendChild(tpl!) : el.insertBefore(tpl!, el.firstChild);
      this.elInput = tpl as HTMLInputElement;
    }
  }

  render() {
    const { $el, pfx, ppfx, model } = this;
    const { type, id } = model.attributes;
    const hasLabel = this.hasLabel && this.hasLabel();
    const cls = `${pfx}trait`;
    let tmpl = `<div class="${cls} ${cls}--${type}">
      ${hasLabel ? `<div class="${ppfx}label-wrp" data-label></div>` : ''}
      <div class="${ppfx}field-wrp ${ppfx}field-wrp--${type}" data-input>
        ${
          this.templateInput
            ? isFunction(this.templateInput)
              ? this.templateInput(this.getClbOpts(), 'link')
              : this.templateInput
            : ''
        }
      </div>
    </div>`;
    if (model.getType() == 'api') {
      tmpl += `<div class="${cls}">
      <svg width="25" height="20">
        <polyline points="1,0 1,10 10,10" fill="none" stroke="gray" stroke-width="1">
      </svg>
      <div class="${ppfx}label-wrp">
        <div class="gjs-label" title="name">Name</div>
      </div>
      <div class="${ppfx}field-wrp ${ppfx}field-wrp--select">
         ${
           this.templateInput
             ? isFunction(this.templateInput)
               ? this.templateInput(this.getClbOpts(), 'name')
               : this.templateInput
             : ''
         }
      </div>
      </div>`;
    }
    $el.empty().append(tmpl);
    hasLabel && this.renderLabel();
    this.renderField();
    this.el.className = `${cls}__wrp ${cls}__wrp-${id}`;
    this.postUpdate();
    this.onRender(this.getClbOpts());
    return this;
  }
}
