import { isFunction, select } from 'underscore';
import Component from './Component';

export default class ComponentText extends Component {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type: 'text',
      droppable: false,
      editable: true,
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
    this.em = opts.em;
    this.on('change:dbinput', this.setData);
    this.listenTo(this.em, 'wrapperRendered', this.startListeningtoApi);
    super.initialize(props, opts);
    this.__checkInnerChilds();
  }

  startListeningtoApi() {
    this.listenTo(this.em.getWrapper(), 'change:json', this.setOptionsFromApi);
  }

  retrieve_json(obj: Record<string, any>[]): Record<string, string>[] {
    return [];
  }
  /**
   * {0 : {name: "muhamed", address: {1, 2, 3}}}
   * {name: 0-name, value:muhamed}
   * {name: 0-address-suite, value:  1}
   */

  setOptionsFromApi() {
    let options: Record<string, string>[] = [];
    let obj: Record<string, any> = this.em.getWrapper()?.get('json');
    pushOptions(obj);

    //@ts-ignore
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

  setData() {
    const childrenContainer = this.view?.getChildrenContainer();
    if (childrenContainer) {
      childrenContainer.innerHTML = this.get('dbinput');
      //@ts-ignore
      this.view.rteEnabled = true;
      this.trigger('sync:content');
    }
  }

  __checkInnerChilds() {
    const { disableTextInnerChilds } = this.em.Components.config;
    if (disableTextInnerChilds) {
      const disableChild = (child: Component) => {
        if (!child.isInstanceOf('textnode')) {
          child.set({
            locked: true,
            layerable: false,
          });
        }
      };

      if (isFunction(disableTextInnerChilds)) {
        this.forEachChild(child => {
          disableTextInnerChilds(child) && disableChild(child);
        });
      } else {
        this.forEachChild(disableChild);
      }
    }
  }
}
