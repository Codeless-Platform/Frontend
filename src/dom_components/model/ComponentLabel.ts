import ComponentText from './ComponentText';
import { toLowerCase } from '../../utils/mixins';

const type = 'label';

export default class ComponentLabel extends ComponentText {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type,
      tagName: type,
      traits: [
        {
          type: 'text',
          name: 'for',
          label: '',
          placeholder: '',
          changeProp: false,
          options: [],
        },
        {
          type: 'text',
          name: 'id',
          label: '',
          placeholder: '',
          changeProp: false,
          options: [],
        },
        {
          type: 'text',
          name: 'title',
          label: '',
          placeholder: '',
          changeProp: false,
          options: [],
        },
      ],
    };
  }

  static isComponent(el: HTMLElement) {
    return toLowerCase(el.tagName) === type;
  }
}
