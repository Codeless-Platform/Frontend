import { CommandObject } from './CommandAbstract';

export default {
  run(ed, s) {
    s && s.set('active');
    ed.DomComponents.clear();
    ed.CssComposer.clear();
  },
} as CommandObject;
