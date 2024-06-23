import { CommandObject } from './CommandAbstract';

export default {
  run(ed, s) {
    ed.UndoManager.undo();
    if (s && s.set) {
      s.set('active', 0);
    }
  },
} as CommandObject;
