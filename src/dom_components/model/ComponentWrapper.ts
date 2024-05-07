import Component from './Component';
import { ComponentOptions } from './types';

export default class ComponentWrapper extends Component {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      tagName: 'body',
      removable: false,
      copyable: false,
      draggable: false,
      components: [],
      apilink: '',
      json: {},
      traits: [
        {
          type: 'text',
          name: 'apilink',
          label: 'API',
          placeholder: 'api for this page',
          changeProp: true,
        },
      ],
      stylable: [
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-attachment',
        'background-position',
        'background-size',
      ],
    };
  }
  initialize(props: any, opts: any) {
    this.on('change:apilink', this.fetchApi);
    super.initialize(props, opts);
  }

  fetchApi() {
    fetch(this.get('apilink'))
      .then(response => response.json())
      .then(json => {
        this.set('json', json);
        console.log(json);
      });
  }

  __postAdd() {
    const um = this.em?.UndoManager;
    !this.__hasUm && um?.add(this);
    return super.__postAdd();
  }

  __postRemove() {
    const um = this.em?.UndoManager;
    um?.remove(this);
    return super.__postRemove();
  }

  static isComponent() {
    return false;
  }
}
