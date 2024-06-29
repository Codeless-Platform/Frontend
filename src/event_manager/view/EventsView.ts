import DomainViews from '../../domain_abstract/view/DomainViews';
import EditorModel from '../../editor/model/Editor';
import EventView from './EventView';
interface Handler {
  value: string;
  blockly: string;
  name: string;
}
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
    this.listenTo(em, 'change:Events', this.renderHandlers);
    this.updatedCollection();
  }

  renderHandlers() {
    let handlercont = this.$el.find('.x').get(0) as HTMLElement | undefined;

    if (!handlercont) {
      let handlerContainer = document.createElement('div');
      handlerContainer.classList.add('x');
      handlercont = handlerContainer;
    }

    handlercont.style.cssText = 'text-align: left;padding: 0 0 15px 10px;border-bottom: 1px solid;';
    console.log(this.em.get('EventManager').handlers);
    let handlers = this.em.get('EventManager').handlers.filter((ih: Record<string, any>) => ih.logic !== '');

    let handlersHtml = handlers
      .map((oh: Handler) => {
        return `<div style="height: 35px;" class="${
          oh.value
        }">\n  <svg width="25" height="35">\n    <polyline points="1,0 1,34 20,34" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round"></polyline>\n  </svg>
      \n  <div class="button-like ${oh.value}" style="cursor: pointer;">${oh.name}</div>\n  ${
          oh.value !== 'newhandler'
            ? `<div class="fa fa-trash ${oh.value}" style="margin-left: 5px; font-size: larger; cursor: pointer;"></div>`
            : ''
        }\n</div>`;
      })
      .join('');

    let contentHtml = `<div class="x">\n  <div>Handlers </div>\n  <div class="HandlerContainer">\n    ${handlersHtml}\n  </div>\n</div>`;

    handlercont.innerHTML = contentHtml;
    this.el.insertBefore(handlercont, this.el.firstChild);

    let listItems = this.$el.find('.button-like').get() as HTMLElement[];
    const th = this;

    listItems.forEach(item => {
      item.addEventListener('click', function () {
        let h = th.em.Events.handlers?.find(handler => handler.value === item.classList[1]);
        if (h) {
          th.em.Editor.runCommand('edit-script', h);
        }
      });
    });

    let trashItems = this.$el.find('.fa-trash').get() as HTMLElement[];

    trashItems.forEach(item => {
      item.addEventListener('click', function () {
        let h = item.classList[2];
        let ev = th.em.getSelected()?.get('events')?.models[0];
        if (ev) ev.deleteHandler(h);
      });
    });
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
    this.renderHandlers();
  }
}

// @ts-ignore
EventsView.prototype.itemView = EventView;
