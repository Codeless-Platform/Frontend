import EditorView from '../../editor/view/EditorView';
import { CommandObject } from './CommandAbstract';

export default {
  run(ed) {
    const rootElement = document.documentElement;
    rootElement.style.setProperty('--gjs-primary-color', 'white');
    rootElement.style.setProperty('--gjs-main-color', 'white');
    rootElement.style.setProperty('--gjs-secondary-color', 'black');
    rootElement.style.setProperty('--gjs-font-color', 'black');
    rootElement.style.setProperty('--gjs-codeMirror-color', 'white');
  },
  stop(ed) {
    const rootElement = document.documentElement;
    rootElement.style.setProperty('--gjs-primary-color', '#444');
    rootElement.style.setProperty('--gjs-main-color', '#444');
    rootElement.style.setProperty('--gjs-secondary-color', '#ddd');
    rootElement.style.setProperty('--gjs-font-color', '#ddd');
    rootElement.style.setProperty('--gjs-codeMirror-color', '#322931');
  },
} as CommandObject;
