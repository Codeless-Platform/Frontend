import tr from '../../i18n/locale/tr';
import Trait from '../../trait_manager/model/Trait';
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
      json: {},
      traits: [
        {
          type: 'api',
          name: 'api1',
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
      events: [
        {
          label: 'onload',
          type: 'Customized',
          eventx: [{ value: 'load', name: 'onload' }],
        },
      ],
    };
  }

  get APIs(): Record<string, any>[] {
    return this.getAPIs();
  }

  initialize(props: any, opts: any) {
    super.initialize(props, opts);
    if (this.getAPIs().length > 1) {
      this.renderTraits();
    }
    this.addNewTrait();
    this.loadJsons();
  }

  clearApis() {
    this.APIs.forEach((api, index) => {
      this.set(`api${index + 1}`, { name: '', link: '', json: '' });
    });
  }

  renderTraits() {
    let index = this.getAPIs().length - 1;
    for (let i = 1; i <= index; i++) {
      this.addTrait(
        [
          {
            type: 'api',
            name: `api${i + 1}`,
            label: 'API',
            changeProp: true,
          },
        ],
        {
          at: this.getTraits().length - 1,
        }
      );
    }
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
            let trait = {
              type: 'api',
              label: 'API',
              changeProp: true,
              name: '',
            };
            trait['name'] = `api${this.getAPIs().length + 1}`;
            this.addTrait([trait], {
              at: this.getTraits().length - 1,
            });
          }
        },
      },
    ]);
  }

  loadJsons() {
    const openErrorModal = (content: string) => {
      this.em.Editor.Modal.open({
        title: 'Error',
        content,
        attributes: { class: 'max-width-500' },
      });
    };

    if (this.getAPIs()) {
      this.getAPIs().forEach(async (api: any, index: number) => {
        if (api.link && api.name) {
          try {
            const response = await fetch(api.link);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const json = await response.json();
            this.set(`api${index + 1}`, { name: api.name, link: api.link, json: json });
          } catch (error) {
            openErrorModal(`Can't fetch ${api.name} API at index ${index}`);
          }
        }
      });
    }

    this.trigger('change:apis');
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
