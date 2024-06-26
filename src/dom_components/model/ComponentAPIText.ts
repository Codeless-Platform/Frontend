import { isFunction } from 'underscore';
import Component from './Component';

export default class ComponentAPIText extends Component {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type: 'APIText',
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
    this.on('Rendered', this.setOptionsFromApi);
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
    function isImageUrl(url: string) {
      return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url);
    }
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
            if (!isImageUrl(element)) options.push({ name: prefix, value: prefix });
          }
        }
        if (name) processElement(json, name);
      });
    }

    const newtrait = [
      {
        type: 'select',
        name: 'dbinput',
        label: 'API Content',
        placeholder: 'api for this page',
        changeProp: true,
        options: options,
      },
    ];

    if (options.length > 0 && this.em) {
      this.removeTrait('dbinput');
      this.addTrait(newtrait);
    }
    if (this.get('dbinput')) {
      this.setData();
    }
  }

  renderContent() {
    const apiName = this.get('dbinput').split('-')[0].trim();
    const apiObject = this.getApiObject(apiName);
    if (apiObject) {
      const path = this.generatePath(apiObject.json, this.get('dbinput'));
      const childrenContainer = this.view?.getChildrenContainer();
      if (path) {
        if (childrenContainer) {
          childrenContainer.innerHTML = eval(`apiObject.json${path}`);
          //@ts-ignore
          this.view.rteEnabled = true;
          this.trigger('sync:content');
        }
      }
    }
  }

  generatePath(obj: any, selectedOptionName: string): string | undefined {
    const segments = selectedOptionName.split('-').slice(1);
    let currentObj = obj;
    let path = '';

    for (const segment of segments) {
      if (Array.isArray(currentObj)) {
        const index = parseInt(segment, 10);
        if (isNaN(index) || index < 0 || index >= currentObj.length) {
          console.error(`Invalid array index: ${index}`);
          return undefined;
        }
        path += `[${index}]`;
        currentObj = currentObj[index];
      } else if (typeof currentObj === 'object' && currentObj !== null) {
        if (!(segment in currentObj)) {
          console.error(`Property '${segment}' does not exist in object`);
          return undefined;
        }
        path += `["${segment}"]`;
        currentObj = currentObj[segment];
      } else {
        console.error(`Unexpected type encountered: ${typeof currentObj}`);
        return undefined;
      }
    }

    return path;
  }

  getApiObject(apiName: String) {
    return this.em
      .getWrapper()
      ?.get('apis')
      .find((obj: any) => obj.name === apiName);
  }

  setData() {
    const selectedText = this.get('dbinput');

    const apiName = selectedText.split('-')[0].trim();
    const apiObject = this.getApiObject(apiName);
    if (apiObject && apiObject.json) {
      const generatedPath = this.generatePath(apiObject.json, selectedText);

      if (generatedPath) {
        const script = `
          async function fetch${this.getId()}Data() {\n  try {\n    const res = await fetch('${
          apiObject.link
        }');\n    if (!res.ok) throw new Error('Network response was not ok');\n    let userData = await res.json();\n    const el = document.getElementById('${this.getId()}');\n    if (el) {\n      el.innerHTML = userData${generatedPath};\n    } else {\n      console.error('Element not found to set the innerHTML');\n    }\n  } catch (error) {\n    if (error instanceof Error) {\n      console.error('Error fetching data:', error.message);\n    } else {\n      console.error('Unknown error fetching data');\n    }\n  }\n}\nfetch${this.getId()}Data();\n`;
        this.set('script-export', script);
      } else {
        console.error(`Generated path for selected option '${selectedText}' is invalid.`);
      }
    } else {
      console.error(`API object not found or invalid for name: ${apiName}`);
    }
    this.renderContent();
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
