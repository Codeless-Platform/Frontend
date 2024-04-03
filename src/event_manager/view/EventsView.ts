import DomainViews from '../../domain_abstract/view/DomainViews';
import EditorModel from '../../editor/model/Editor';
import EventView from './EventView';

export default class EventsView extends DomainViews {
  reuseView = true;
  em: EditorModel;
  pfx: string;
  ppfx: string;

  constructor(o: any = {}, itemsView: any) {
    super(o);
    this.itemsView = itemsView;
    const config = o.config || {};

    const em = o.editor;
    this.config = config;
    this.em = em;
    this.ppfx = config.pStylePrefix || '';
    this.pfx = this.ppfx + config.stylePrefix || '';
    this.className = `${this.pfx}events`;
    this.listenTo(em, 'component:toggled', this.updatedCollection);
    this.listenTo(em, 'change:Events', this.dothis);
    this.updatedCollection();
  }

  dothis() {
    let handlercont = this.$el.find('.x')[0];
    if (!handlercont) {
      let handlerContainer = document.createElement('div');
      handlerContainer.classList.add('x');
      handlercont = handlerContainer;
    }
    handlercont.style.cssText = 'text-align: left;padding: 0 0 15px 10px;border-bottom: 1px solid;';
    let x = document.createElement('div');
    x.classList.add('x');
    let y = document.createElement('div');
    let h = this.em.get('EventManager').handlers;
    //@ts-ignores
    h = h.filter(ih => ih.blockly !== '');
    console.log(h);
    y.innerText = 'Handlers ';
    x.appendChild(y);
    let m = document.createElement('div');
    m.classList.add('HandlerContainer');
    //@ts-ignore
    h.forEach(oh => {
      let n = document.createElement('div');
      n.style.height = '35px';
      n.style.cursor = 'pointer';
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '25');
      svg.setAttribute('height', '35');
      const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      polyline.setAttribute('points', '0,0 0,34 20,34');
      polyline.setAttribute('fill', 'none');
      polyline.setAttribute('stroke', 'gray');
      polyline.setAttribute('stroke-width', '2');
      svg.appendChild(polyline);
      n.appendChild(svg);
      let txt = document.createElement('div');
      txt.classList.add('button-like');
      txt.classList.add(oh.value);
      txt.innerHTML = oh.name;
      n.appendChild(txt);
      n.classList.add(oh.value);
      m.appendChild(n);
      let res = document.createElement('div');
      res.classList.add('resizer');
      m.appendChild(res);
    });

    x.append(m);
    handlercont.innerHTML = x.innerHTML;
    this.el.insertBefore(handlercont, this.el.firstChild);
    let listItems = this.$el.find('.HandlerContainer div');
    const th = this;
    //@ts-ignore
    for (let item of listItems) {
      item.addEventListener('click', function () {
        let h = th.em.Events.handlers?.filter(handler => handler.value === item.classList[1])[0];
        th.em.Editor.runCommand('blockly-script', h);
      });
    }
  }
  /**
   * Update view collection
   * @private
   */
  updatedCollection() {
    const { ppfx, className, em } = this;
    const comp = em.getSelected();
    this.el.className = `${className} ${ppfx}one-bg ${ppfx}two-color`;
    // @ts-ignore
    this.collection = comp ? comp.events : [];
    this.render();
    this.dothis();
  }
}

// @ts-ignore
EventsView.prototype.itemView = EventView;
