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
    console.log(h);
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

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '25');
      svg.setAttribute('height', '35');
      const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      polyline.setAttribute('points', '1,0 1,34 20,34');
      polyline.setAttribute('fill', 'none');
      polyline.setAttribute('stroke', 'gray');
      polyline.setAttribute('stroke-width', '2');
      polyline.setAttribute('stroke-linecap', 'round');
      svg.appendChild(polyline);
      n.appendChild(svg);
      let txt = document.createElement('div');
      txt.classList.add('button-like');
      txt.classList.add(oh.value);
      txt.style.cursor = 'pointer';
      txt.innerHTML = oh.name;
      n.appendChild(txt);
      n.classList.add(oh.value);
      if (oh.value !== 'newhandler') {
        let trash = document.createElement('div');
        trash.classList.add('fa');
        trash.classList.add('fa-trash');
        trash.classList.add(oh.value);
        trash.style.marginLeft = '5px';
        trash.style.fontSize = 'larger';
        trash.style.cursor = 'pointer';
        n.appendChild(trash);
      }
      m.appendChild(n);
    });

    x.append(m);
    handlercont.innerHTML = x.innerHTML;
    this.el.insertBefore(handlercont, this.el.firstChild);
    let listItems = this.$el.find('.button-like');
    const th = this;
    //@ts-ignore
    for (let item of listItems) {
      item.addEventListener('click', function () {
        let h = th.em.Events.handlers?.filter(handler => handler.value === item.classList[1])[0];
        console.log(h);
        th.em.Editor.runCommand('blockly-script', h);
      });
    }
    listItems = this.$el.find('.fa-trash');
    //@ts-ignore
    for (let item of listItems) {
      item.addEventListener('click', function () {
        let h = item.classList[2];
        let ev = th.em.getSelected()?.get('events')?.models[0];
        if (ev) ev.deleteHandler(h);
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
