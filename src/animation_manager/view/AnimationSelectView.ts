import { isString, isUndefined } from 'underscore';
import { $ } from '../../common';
import AnimationView from './AnimationView';

export default class AnimationSelectView extends AnimationView {
  constructor(o = {}) {
    super(o);
    this.listenTo(this.model, 'change:options', this.rerender);
  }

  templateInput() {
    const { ppfx, clsField } = this;
    return `<div class="${clsField}">
      <div data-input></div>
      <div class="${ppfx}sel-arrow">
        <div class="${ppfx}d-s-arrow"></div>
      </div>
    </div>`;
  }

  /**
   * Returns input element
   * @return {HTMLElement}
   * @private
   */
  getInputEl() {
    if (!this.$input) {
      const { model, em } = this;
      const propName = model.get('name');
      const opts = model.get('options') || [];
      const values: string[] = [];
      let input = '<select >';

      const processOption = (el: Record<string, any>) => {
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

        const resultName = em.t(`animationManager.animations.options.${propName}.${value}`) || name;
        return `<option value="${value}"${attrs}>${resultName}</option>`;
      };

      opts.forEach(el => {
        if (Array.isArray(el.options)) {
          input += `<optgroup label="${el.label}" style="color:black; background-color:#DCDCDC;"}>`;
          el.options.forEach(option => {
            input += processOption(option);
            values.push(option.value);
          });
          input += '</optgroup>';
        } else {
          input += processOption(el);
          values.push(el.value);
        }
      });

      input += '</select>';
      this.$input = $(input);
      const val = model.getTargetValue();
      const valResult = values.indexOf(val) >= 0 ? val : model.get('default');
      !isUndefined(valResult) && this.$input!.val(valResult);
    }

    return this.$input!.get(0);
  }
}
