import EditorView from '../../editor/view/EditorView';
import { CommandObject } from './CommandAbstract';

export default {
  run(ed) {
    const rootElement = document.documentElement;
    rootElement.style.setProperty('--gjs-primary-color', 'white');
    rootElement.style.setProperty('--gjs-main-color', 'white');
    rootElement.style.setProperty('--gjs-secondary-color', 'black');
    console.log(this);
  },
  stop(ed) {
    const rootElement = document.documentElement;
    rootElement.style.setProperty('--gjs-primary-color', '#444');
    rootElement.style.setProperty('--gjs-secondary-color', '#ddd');
  },
} as CommandObject;
