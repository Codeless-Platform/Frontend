import { CommandObject } from './CommandAbstract';
import { EditorParam } from '../../editor';
import { createEl } from '../../utils/dom';

interface ExportTemplateRunOptions {
  optsHtml?: EditorParam<'getHtml', 0>;
  optsCss?: EditorParam<'getCss', 0>;
  optsJs?: EditorParam<'getJs', 0>;
}

export default {
  run(editor, sender, opts: ExportTemplateRunOptions = {}) {
    sender && sender.set && sender.set('active', 0);
    const config = editor.getConfig();
    const modal = editor.Modal;
    const pfx = config.stylePrefix;
    this.cm = editor.CodeManager || null;

    if (!this.editors) {
      const oHtmlEd = this.buildEditor('htmlmixed', 'hopscotch', 'HTML');
      const oCsslEd = this.buildEditor('css', 'hopscotch', 'CSS');
      const oJslEd = this.buildEditor('javascript', 'hopscotch', 'JS');
      this.htmlEditor = oHtmlEd.model;
      this.cssEditor = oCsslEd.model;
      this.jsEditor = oJslEd.model;
      const editors = createEl('div', { class: `${pfx}export-dl` });
      editors.appendChild(oHtmlEd.el);
      editors.appendChild(oCsslEd.el);
      editors.appendChild(oJslEd.el);
      this.editors = editors;
    }

    modal
      .open({
        title: config.textViewCode,
        content: this.editors,
      })
      .getModel()
      .once('change:open', () => editor.stopCommand(`${this.id}`));
    this.htmlEditor.setContent(editor.getHtml(opts.optsHtml));
    this.cssEditor.setContent(editor.getCss(opts.optsCss));
    this.jsEditor.setContent(editor.getJs(opts.optsJs));
  },

  stop(editor) {
    const modal = editor.Modal;
    modal && modal.close();
  },

  buildEditor(codeName: string, theme: string, label: string) {
    const cm = this.em.CodeManager;
    const model = cm.createViewer({
      label,
      codeName,
      theme,
    });

    const el = new cm.EditorView({
      model,
      config: cm.getConfig(),
    } as any).render().el;

    return { model, el };
  },
} as CommandObject<{}, { [k: string]: any }>;
