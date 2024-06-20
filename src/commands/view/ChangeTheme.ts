import EditorView from '../../editor/view/EditorView';
import { CommandObject } from './CommandAbstract';

export default {
  run(ed) {
    const rootElement = document.documentElement;
    rootElement.style.setProperty('--gjs-primary-color', 'white');
    rootElement.style.setProperty('--gjs-main-color', 'white');
    rootElement.style.setProperty('--gjs-secondary-color', 'rgb(102, 102, 135)');
    rootElement.style.setProperty('--gjs-font-color', 'rgb(102, 102, 135)');
    rootElement.style.setProperty('--gjs-secondary-light-color', 'black');
  },
  stop(ed) {
    const rootElement = document.documentElement;
    rootElement.style.setProperty('--gjs-primary-color', 'rgb(33, 33, 52)');
    rootElement.style.setProperty('--gjs-main-color', 'rgb(33, 33, 52)');
    rootElement.style.setProperty('--gjs-secondary-color', '#ffffff');
    rootElement.style.setProperty('--gjs-font-color', '#ffffff');
    rootElement.style.setProperty('--gjs-secondary-light-color', '#ffffff');
  },
} as CommandObject;
