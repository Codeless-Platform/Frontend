import { CommandObject } from './CommandAbstract';

export default {
  run(editor) {
    const lm = editor.LayerManager;
    const pn = editor.Panels;
    const lmConfig = lm.getConfig();

    if (lmConfig.appendTo) return;

    if (!this.layers) {
      let el2 = document.getElementsByClassName('top-panel')[0];
      el2.classList.remove('top-panel');
      const id = 'views-container';
      const layers = document.createElement('div');
      // @ts-ignore
      const panels = pn.getPanel(id) || pn.addPanel({ id });

      if (lmConfig.custom) {
        lm.__trgCustom({ container: layers });
      } else {
        layers.appendChild(lm.render());
      }

      panels.set('appendContent', layers).trigger('change:appendContent');
      layers.classList.add('top-panel');
      //@ts-ignore
      layers.style.flex = el2.style.flex;
      //@ts-ignore
      el2.style.flex = '';
      this.layers = layers;
    } else {
      let el = document.getElementsByClassName('layers-panel')[0];
      let el2 = document.getElementsByClassName('top-panel')[0];
      //@ts-ignore
      el.style.flex = el2.style.flex;
      //@ts-ignore
      el2.style.flex = '';
      el.classList.add('top-panel');
      el2.classList.remove('top-panel');
    }

    this.layers.style.display = 'block';
  },

  stop() {
    const { layers } = this;
    layers && (layers.style.display = 'none');
    let el = document.getElementsByClassName('top-panel')[0];
    el.classList.add('layers-panel');
  },
} as CommandObject<{}, { [k: string]: any }>;
