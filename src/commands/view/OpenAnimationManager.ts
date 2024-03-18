import { CommandObject } from './CommandAbstract';
import { $ } from '../../common';

export default {
  run(editor, sender) {
    this.sender = sender;
    const em = editor.getModel();

    const config = editor.Config;
    const pfx = config.stylePrefix;
    const tm = editor.AnimationManager;
    const confTm = tm.getConfig();
    let panelC;

    if (confTm.appendTo) return;

    if (!this.$cn) {
      let el2 = document.getElementsByClassName('top-panel')[0];
      el2.classList.remove('top-panel');
      this.$cn = $('<div class="top-panel"></div>');
      this.$cn2 = $('<div></div>');
      this.$cn.append(this.$cn2);
      this.$header = $('<div>').append(
        `<div class="${confTm.stylePrefix}header">${em.t('animationManager.empty')}</div>`
      );
      this.$cn.append(this.$header);

      if (confTm.custom) {
        tm.__trgCustom({ container: this.$cn2.get(0) });
      } else {
        this.$cn2.append(`<div class="${pfx}animations-label">${em.t('animationManager.label')}</div>`);
        this.$cn2.append(tm.render());
      }

      var panels = editor.Panels;

      if (!panels.getPanel('views-container')) {
        // @ts-ignore
        panelC = panels.addPanel({ id: 'views-container' });
      } else {
        panelC = panels.getPanel('views-container');
      }

      panelC?.set('appendContent', this.$cn.get(0)).trigger('change:appendContent');

      this.target = editor.getModel();
      let el = document.getElementsByClassName('top-panel')[0];
      //@ts-ignore
      el.style.flex = el2.style.flex;
      //@ts-ignore
      el2.style.flex = '';
      this.listenTo(this.target, 'component:toggled', this.toggleTm);
    } else {
      let el = document.getElementsByClassName('am-panel')[0];
      let el2 = document.getElementsByClassName('top-panel')[0];
      //@ts-ignore
      el.style.flex = el2.style.flex;
      //@ts-ignore
      el2.style.flex = '';
      el.classList.add('top-panel');
      el2.classList.remove('top-panel');
    }

    this.toggleTm();
  },

  /**
   * Toggle animation Manager visibility
   * @private
   */
  toggleTm() {
    const sender = this.sender;
    if (sender && sender.get && !sender.get('active')) return;

    if (this.target.getSelectedAll().length === 1) {
      this.$cn2.show();
      this.$header.hide();
    } else {
      this.$cn2.hide();
      this.$header.show();
    }
  },

  stop() {
    this.$cn2 && this.$cn2.hide();
    this.$header && this.$header.hide();
    let el = document.getElementsByClassName('top-panel')[0];
    el.classList.add('am-panel');
  },
} as CommandObject<{}, { [k: string]: any }>;
