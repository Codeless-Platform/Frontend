import { debounce } from 'underscore';
import { Model } from '../common';
import { Module } from '../abstract';
import defaults, { AnimationManagerConfig } from './config/config';
import AnimationsView from './view/AnimationsView';
import AnimationView from './view/AnimationView';
import AnimationSelectView from './view/AnimationSelectView';
import EditorModel from '../editor/model/Editor';
import Component from '../dom_components/model/Component';
import Animation from './model/Animation';

export const evAll = 'animation';
export const evPfx = `${evAll}:`;
export const evCustom = `${evPfx}custom`;

const typesDef: { [id: string]: { new (o: any): AnimationView } } = {
  select: AnimationSelectView,
};

interface IAnimationView {
  noLabel?: AnimationView['noLabel'];
  eventCapture?: AnimationView['eventCapture'];
  templateInput?: AnimationView['templateInput'];
  onEvent?: AnimationView['onEvent'];
  onUpdate?: AnimationView['onUpdate'];
  createInput?: AnimationView['createInput'];
  createLabel?: AnimationView['createLabel'];
}

export type CustomAnimation<T> = IAnimationView & T & ThisType<T & AnimationView>;

export default class AnimationManager extends Module<AnimationManagerConfig & { pStylePrefix?: string }> {
  view?: AnimationsView;
  types: { [id: string]: { new (o: any): AnimationView } };
  model: Model;
  __ctn?: any;
  AnimationsView = AnimationsView;

  events = {
    all: evAll,
    custom: evCustom,
  };

  /**
   * Get configuration object
   * @name getConfig
   * @function
   * @return {Object}
   */

  /**
   * Initialize module
   * @private
   */
  constructor(em: EditorModel) {
    super(em, 'AnimationManager', defaults);
    const model = new Model();
    this.model = model;
    this.types = typesDef;

    const upAll = debounce(() => this.__upSel(), 0);
    model.listenTo(em, 'component:toggled', upAll);

    const update = debounce(() => this.__onUp(), 0);
    model.listenTo(em, 'animation:update', update);

    return this;
  }

  __upSel() {
    this.select(this.em.getSelected());
  }

  __onUp() {
    this.select(this.getSelected());
  }

  select(component?: Component) {
    const animations = component ? component.getAnimations() : [];
    this.model.set({ component, animations });
    this.__trgCustom();
  }

  getSelected(): Component | undefined {
    return this.model.get('component');
  }

  /**
   * Get animations from the currently selected component.
   */
  getCurrent(): Animation[] {
    return this.model.get('animations') || [];
  }

  __trgCustom(opts: any = {}) {
    this.__ctn = this.__ctn || opts.container;
    this.em.trigger(this.events.custom, { container: this.__ctn });
  }

  postRender() {
    this.__appendTo();
  }

  /**
   *
   * Get animations viewer
   * @private
   */
  getAnimatinsViewer() {
    return this.view;
  }

  /**
   * Add new animation type
   * @param {string} name Type name
   * @param {Object} methods Object representing the animation
   */
  addType<T>(name: string, animation: CustomAnimation<T>) {
    const baseView = this.getType('text');
    //@ts-ignore
    this.types[name] = baseView.extend(animation);
  }

  /**
   * Get animation type
   * @param {string} name Type name
   * @return {Object}
   */
  getType(name: string) {
    return this.getTypes()[name];
  }

  /**
   * Get all animation types
   * @returns {Object}
   */
  getTypes() {
    return this.types;
  }

  render() {
    let { view, em } = this;
    const config = this.getConfig();
    const el = view && view.el;
    view = new AnimationsView(
      {
        el,
        collection: [],
        editor: em,
        config,
      },
      this.getTypes()
    );
    this.view = view;
    return view.el;
  }

  destroy() {
    this.model.stopListening();
    this.model.clear();
  }
}
