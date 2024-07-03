import { result } from 'underscore';
import Component from './Component';
import { toLowerCase, buildBase64UrlFromSvg, hasWin } from '../../utils/mixins';
import { ObjectStrings } from '../../common';

const svgAttrs =
  'xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 24 24" style="fill: rgba(0,0,0,0.15); transform: scale(0.75)"';

export default class ComponentAPIImage extends Component {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type: 'APIImage',
      tagName: 'img',
      void: true,
      droppable: 1,
      editable: 1,
      highlightable: 0,
      resizable: { ratioDefault: 1 },
      traits: ['alt'],

      src: `<svg ${svgAttrs}>
        <path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z"></path>
      </svg>`,

      // Fallback image in case the src can't be loaded
      // If you use SVG, xmlns="http://www.w3.org/2000/svg" is required
      fallback: `<svg ${svgAttrs}>
        <path d="M2.28 3L1 4.27l2 2V19c0 1.1.9 2 2 2h12.73l2 2L21 21.72 2.28 3m2.55 0L21 19.17V5a2 2 0 0 0-2-2H4.83M8.5 13.5l2.5 3 1-1.25L14.73 18H5l3.5-4.5z"></path>
      </svg>`,

      // File to load asynchronously once the model is rendered
      file: '',
    };
  }

  initialize(props: any, opts: any) {
    super.initialize(props, opts);
    const { src } = this.get('attributes')!;
    if (src && buildBase64UrlFromSvg(result(this, 'defaults').src) !== src) {
      this.set('src', src, { silent: true });
    }
    this.on('change:dbinput', this.setData);
    this.em.getWrapper()
      ? this.startListeningtoApi()
      : this.listenTo(this.em, 'wrapperRendered', this.startListeningtoApi);
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

    function pushOptions(obj: Record<string, any>) {
      Object.keys(obj).forEach(key => {
        const item = obj[key];
        const name = item.name;
        const json = item.json;

        function isImageUrl(url: string) {
          return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url);
        }

        function processElement(element: any, prefix: String) {
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
            if (typeof element === 'string' && isImageUrl(element)) {
              options.push({ name: prefix, value: prefix });
            }
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
      if (path) {
        this.set('src', this.em.Assets.add(eval(`apiObject.json${path}`)).getSrc());
      }
    }
  }

  getApiObject(apiName: String) {
    return this.em
      .getWrapper()
      ?.get('apis')
      .find((obj: any) => obj.name === apiName);
  }

  generatePath(obj: any, selectedOptionName: string): string | undefined {
    const segments = selectedOptionName.split('-').slice(1);
    let currentObj = obj;
    let path = '';

    try {
      for (const segment of segments) {
        if (Array.isArray(currentObj)) {
          const index = parseInt(segment, 10);
          if (isNaN(index) || index < 0 || index >= currentObj.length) {
            throw new Error(`Invalid array index: ${index}`);
          }
          path += `[${index}]`;
          currentObj = currentObj[index];
        } else if (typeof currentObj === 'object' && currentObj !== null) {
          if (!(segment in currentObj)) {
            throw new Error(`Property '${segment}' does not exist in object`);
          }
          path += `["${segment}"]`;
          currentObj = currentObj[segment];
        } else {
          throw new Error(`Unexpected type encountered: ${typeof currentObj}`);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error generating path: ${error.message}`);
      } else {
        console.error('Unknown error generating path');
      }
      return undefined;
    }

    return path;
  }

  setData() {
    const selectedText = this.get('dbinput');
    const apiName = selectedText.split('-')[0].trim();
    const apiObject = this.getApiObject(apiName);

    if (apiObject && apiObject.json) {
      const generatedPath = this.generatePath(apiObject.json, selectedText);
      const token = sessionStorage.getItem('jwt');
      if (generatedPath) {
        const script = `
          async function fetch${this.getId()}Data() {\n  try {\n       const token = sessionStorage.getItem('jwt');\n  const headers= {\n'Content-Type': 'application/json', \n};\nif (token) {\nheaders.Authorization = 'Bearer  ${token}';\n}\nconst res = await fetch('${
          apiObject.link
        }',{\n  headers,\n});\nif (!res.ok) throw new Error('Network response was not ok');\n    let userData = await res.json();\n    const el = document.getElementById('${this.getId()}');\n    if (el) {\n      el.src = userData${generatedPath};\n    } else {\n      console.error('Element not found to set the innerHTML');\n    }\n  } catch (error) {\n    if (error instanceof Error) {\n      console.error('Error fetching data:', error.message);\n    } else {\n      console.error('Unknown error fetching data');\n    }\n  }\n}\nfetch${this.getId()}Data();\n`;
        this.set('script-export', script);
      } else {
        console.error(`Generated path for selected option '${selectedText}' is invalid.`);
      }
    } else {
      console.error(`API object not found or invalid for name: ${apiName}`);
    }
    this.renderContent();
  }

  initToolbar() {
    super.initToolbar();
    const { em } = this;

    if (em) {
      const cmd = em.Commands;
      const cmdName = 'image-editor';

      // Add Image Editor button only if the default command exists
      if (cmd.has(cmdName)) {
        let hasButtonBool = false;
        const tb = this.get('toolbar')!;

        for (let i = 0; i < tb.length; i++) {
          if (tb[i].command === 'image-editor') {
            hasButtonBool = true;
            break;
          }
        }

        if (!hasButtonBool) {
          tb.push({
            attributes: { class: 'fa fa-pencil' },
            command: cmdName,
          });
          this.set('toolbar', tb);
        }
      }
    }
  }

  /**
   * Returns object of attributes for HTML
   * @return {Object}
   * @private
   */
  getAttrToHTML() {
    const attr = super.getAttrToHTML();
    const src = this.getSrcResult();
    if (src) attr.src = src;
    return attr;
  }

  getSrcResult(opt: { fallback?: boolean } = {}) {
    const src = this.get(opt.fallback ? 'fallback' : 'src') || '';
    let result = src;

    if (src && src.substr(0, 4) === '<svg') {
      result = buildBase64UrlFromSvg(src);
    }

    return result;
  }

  isDefaultSrc() {
    const src = this.get('src');
    const srcDef = result(this, 'defaults').src;
    return src === srcDef || src === buildBase64UrlFromSvg(srcDef);
  }

  /**
   * Return a shallow copy of the model's attributes for JSON
   * stringification.
   * @return {Object}
   * @private
   */
  toJSON(opts: Parameters<Component['toJSON']>[0]) {
    const obj = super.toJSON(opts);
    const { attributes } = obj;

    if (attributes && obj.src === attributes.src) {
      delete obj.src;
    }

    return obj;
  }

  /**
   * Parse uri
   * @param  {string} uri
   * @return {object}
   * @private
   */
  parseUri(uri: string) {
    let result: HTMLAnchorElement | URL | ObjectStrings = {};

    const getQueryObject = (search = '') => {
      const query: ObjectStrings = {};
      const qrs = search.substring(1).split('&');

      for (let i = 0; i < qrs.length; i++) {
        const pair = qrs[i].split('=');
        const name = decodeURIComponent(pair[0]);
        if (name) query[name] = decodeURIComponent(pair[1] || '');
      }

      return query;
    };

    if (hasWin()) {
      result = document.createElement('a');
      result.href = uri;
    } else if (typeof URL !== 'undefined') {
      try {
        result = new URL(uri);
      } catch (e) {}
    }

    return {
      hostname: result.hostname || '',
      pathname: result.pathname || '',
      protocol: result.protocol || '',
      search: result.search || '',
      hash: result.hash || '',
      port: result.port || '',
      query: getQueryObject(result.search),
    };
  }

  static isComponent(el: HTMLElement) {
    return toLowerCase(el.tagName) === 'img';
  }
}
