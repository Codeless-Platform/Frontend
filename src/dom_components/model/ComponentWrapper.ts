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
      apiUpdated: false,
      json: {},
      apis: [],
      traits: [
        {
          type: 'api',
          name: 'apilink',
          label: 'API',
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
    this.on('change:apiUpdated', this.fetchApi);
    this.on('change:apis', this.dothis);
    super.initialize(props, opts);
    this.addNewTrait();
  }
  dothis() {
    console.log(9);
  }
  addNewTrait() {
    this.addTrait([
      {
        type: 'button',
        name: 'addnewAPI',
        label: '',
        changeProp: true,
        text: 'Add New API',
        command: () => {
          if (this.em) {
            this.addTrait(
              [
                {
                  type: 'api',
                  name: [...Array(length)].map(() => Math.random().toString(36).charAt(2)).join(''),
                  label: 'API',
                  changeProp: true,
                },
              ],
              {
                at: this.getTraits().length - 1,
              }
            );
          }
        },
      },
    ]);
  }
  fetchApi() {
    fetch(this.get('apis')[this.get('apiUpdated')].link)
      .then(response => response.json())
      .then(json => {
        this.get('apis')[this.get('apiUpdated')].json = json;
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
