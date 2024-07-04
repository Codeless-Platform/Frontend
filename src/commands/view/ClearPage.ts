import { CommandObject } from './CommandAbstract';

export default {
  run(ed, s) {
    s && s.set('active');
    ed.DomComponents.clear();

    const componentsById = ed.Components.componentsById;
    const componentIds = Object.keys(componentsById);

    for (let i = 0; i < 1000; i++) {
      ed.EditorModel.Css.getAll().models.forEach(model => {
        const mediaText = model.attributes['mediaText'];
        if (mediaText) {
          const found = componentIds.some(id => mediaText.includes(id));
          if (!found) {
            ed.Css.remove(model);
          }
        }
      });
    }
    if (ed.Pages.getAll().length < 2) {
      ed.Css.clear();
    }

    ed.getWrapper()?.clearApis();
  },
} as CommandObject;
