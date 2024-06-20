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
    };
  }

  initialize(props: any, opts: any) {
    this.em = opts.em;
    this.on('change:dbinput', this.setData);
    this.em.getWrapper()
      ? this.startListeningtoApi()
      : this.listenTo(this.em, 'wrapperRendered', this.startListeningtoApi);
    super.initialize(props, opts);
    this.__checkInnerChilds();
  }

  startListeningtoApi() {
    if (this.em.getWrapper()?.get('apis')) {
      this.on('Rendered', this.setOptionsFromApi);
    }
    this.listenTo(this.em.getWrapper(), 'change:apis', this.setOptionsFromApi);
  }

  setOptionsFromApi() {
    let options: Record<string, any>[] = [];
    let obj: Record<string, any> = this.em.getWrapper()?.get('apis');
    pushOptions(obj);

    function pushOptions(obj: Record<string, any>) {
      Object.keys(obj).forEach(key => {
        const item = obj[key];
        const name = item.name;
        const json = item.json;

        function processElement(element: any, prefix: string) {
          if (Array.isArray(element)) {
            element.forEach((subElem, index) => {
              processElement(subElem, `${prefix}-${index}`);
            });
          } else if (typeof element === 'object' && element !== null) {
            Object.keys(element).forEach(elemKey => {
              const optionName = `${prefix}-${elemKey}`;
              const optionValue = element[elemKey];
              processElement(optionValue, optionName);
            });
          } else {
            options.push({ name: prefix, value: element });
          }
        }
        if (name) processElement(json, name);
      });
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

    if (options.length > 0 && this.em) {
      this.removeTrait('dbinput');
      this.addTrait(newtrait);
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
