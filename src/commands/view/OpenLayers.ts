import Layer from '../../style_manager/model/Layer';
import { CommandObject } from './CommandAbstract';

export default {
  run(editor) {
    const lm = editor.LayerManager;
    const pn = editor.Panels;
    const lmConfig = lm.getConfig();

    if (lmConfig.appendTo) return;

    if (!this.layers) {
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
      layers.classList.add('layers-panel');
      this.layers = layers;
    }
    if (this.layers) this.layers.style.order = '1';
    this.layers.style.display = 'block';
  },

  stop() {
    const { layers } = this;
    if (this.layers) this.layers.style.order = '';
    layers && (layers.style.display = 'none');
  },
} as CommandObject<{}, { [k: string]: any }>;
