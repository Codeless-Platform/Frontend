import { result } from 'underscore';
import Component from './Component';
import { toLowerCase, buildBase64UrlFromSvg, hasWin } from '../../utils/mixins';
import { ObjectStrings } from '../../common';

const svgAttrs =
  'xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 24 24" style="fill: rgba(0,0,0,0.15); transform: scale(0.75)"';

export default class ComponentImage extends Component {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type: 'image',
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
  }

  startListeningtoApi() {
    console.log(1);
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
            // Check if the value is a link to an image
            if (typeof element === 'string' && isImageUrl(element)) {
              options.push({ name: prefix, value: element });
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
    this.set('src', this.get('dbinput'));
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
