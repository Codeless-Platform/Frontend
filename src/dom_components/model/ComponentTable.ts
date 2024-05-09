import Component from './Component';
import { toLowerCase } from '../../utils/mixins';

const type = 'table';

export default class ComponentTable extends Component {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type,
      tagName: type,
      droppable: ['tbody', 'thead', 'tfoot'],
      traits: [
        {
          type: 'select',
          name: 'dbinput',
          label: 'Content',
          placeholder: 'api for this page',
          changeProp: true,
          options: [{}],
        },
      ],
    };
  }

  initialize(props: any, opts: any) {
    super.initialize(props, opts);
    const components = this.get('components')!;
    !components.length && components.add({ type: 'tbody' });
    this.em.getWrapper()
      ? this.startListeningtoApi()
      : this.listenTo(this.em, 'wrapperRendered', this.startListeningtoApi);
  }

  startListeningtoApi() {
    this.listenTo(this.em.getWrapper(), 'change:json', this.setOptionsFromApi);
  }

  setOptionsFromApi() {
    let options: Record<string, string>[] = [];
    let obj: Record<string, any> = this.em.getWrapper()?.get('json');
    pushOptions(obj);

    function pushOptions(obj: Record<string, any>, prefix = '') {
      for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          pushOptions(obj[key], `${prefix}${key}-`);
        } else {
          options.push({ name: `${prefix}${key}`, value: obj[key] });
        }
      }
    }

    const newtrait = [
      {
        type: 'select',
        name: 'dbinput',
        label: 'Content',
        placeholder: 'api for this page',
        changeProp: true,
        options: options,
      },
    ];

    if (options.length > 0) {
      //@ts-ignore
      this.set('traits', newtrait);
    }
  }

  static isComponent(el: HTMLElement) {
    return toLowerCase(el.tagName) === type;
  }
}
