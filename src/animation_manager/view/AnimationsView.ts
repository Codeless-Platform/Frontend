import DomainViews from '../../domain_abstract/view/DomainViews';
import EditorModel from '../../editor/model/Editor';
import AnimationView from './AnimationView';

export default class AnimationsView extends DomainViews {
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
    this.className = `${this.pfx}animations`;
    this.listenTo(em, 'component:toggled', this.updatedCollection);
    this.updatedCollection();
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
    this.collection = comp ? comp.animations : [];
    this.render();
  }
}

// @ts-ignore
AnimationsView.prototype.itemView = AnimationView;
