import { forEach } from 'underscore';
import { toLowerCase } from '../../utils/mixins';
import ComponentText from './ComponentText';
import { Options } from 'blockly';

const type = 'link';

export default class ComponentLink extends ComponentText {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type,
      tagName: 'a',
      traits: [
        {
          type: 'text',
          name: 'title',
          label: '',
          placeholder: '',
          changeProp: false,
          options: [],
        },
        {
          type: 'text',
          name: 'href',
          label: '',
          placeholder: '',
          changeProp: false,
          options: [],
        },
        {
          type: 'select',
          name: 'target',
          label: '',
          placeholder: '',
          changeProp: false,
          options: [
            { value: 'false', name: 'This window' },
            { value: '_blank', name: 'New window' },
          ],
        },
      ],
    };
  }

  static isComponent(el: HTMLElement, opts: any = {}) {
    let result: any;

    if (toLowerCase(el.tagName) === 'a') {
      const textTags = opts.textTags || [];
      result = { type, editable: false };

      // The link is editable only if, at least, one of its
      // children is a text node (not empty one)
      const children = el.childNodes;
      const len = children.length;
      if (!len) delete result.editable;

      forEach(children, child => {
        const { tagName } = child as HTMLElement;
        if (
          (child.nodeType == 3 && (child as any).textContent.trim() !== '') ||
          (tagName && textTags.indexOf(toLowerCase(tagName)) >= 0)
        ) {
          delete result.editable;
        }
      });
    }

    return result;
  }
}
