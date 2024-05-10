import Editor from '../../editor';
import Component from '../model/Component';
import ComponentView from './ComponentView';

export default class ComponentTableView extends ComponentView {
  tagName() {
    return 'div';
  }
}
