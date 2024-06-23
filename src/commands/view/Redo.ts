import { CommandObject } from './CommandAbstract';

export default {
  run(ed, s) {
    ed.UndoManager.redo();
    if (s && s.set) {
      s.set('active', 0);
    }
  },
} as CommandObject;
