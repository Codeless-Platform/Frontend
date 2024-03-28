import { debounce } from 'underscore';
import { Model } from '../common';
import { Module } from '../abstract';
import defaults, { EventManagerConfig } from './config/config';
import EventsView from './view/EventsView';
import EventView from './view/EventView';
import CustomEventView from './view/CustomEventView';
import EditorModel from '../editor/model/Editor';
import Component from '../dom_components/model/Component';
import Event from './model/Event';

export const evAll = 'event';
export const evPfx = `${evAll}:`;
export const evCustom = `${evPfx}custom`;

const typesDef: { [id: string]: { new (o: any): EventView } } = {
  NotCustomized: EventView,
  Customized: CustomEventView,
};

interface IEventView {
  noLabel?: EventView['noLabel'];
  eventCapture?: EventView['eventCapture'];
  templateInput?: EventView['templateInput'];
  onEvent?: EventView['onEvent'];
  onUpdate?: EventView['onUpdate'];
  createInput?: EventView['createInput'];
  createLabel?: EventView['createLabel'];
}

export type CustomEvent<T> = IEventView & T & ThisType<T & EventView>;

export default class EventManager extends Module<EventManagerConfig & { pStylePrefix?: string }> {
  view?: EventsView;
  types: { [id: string]: { new (o: any): EventView } };
  model: Model;
  __ctn?: any;
  EventsView = EventsView;
  handlers?: Record<string, any>[];

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
    super(em, 'EventManager', defaults);
    const model = new Model();
    this.model = model;
    this.types = typesDef;
    this.handlers = [
      { value: 'fullscreen', name: 'Fullscreen', logic: '', blockly: '' },
      { value: 'resize', name: 'Resize', logic: '', blockly: '' },
      { value: 'redirecttourl', name: 'Redirect to url', logic: '', blockly: '' },
      { value: 'redirecttopage', name: 'Redirect to page', logic: '', blockly: '' },
      { value: 'none', name: 'none', blockly: '' },
      { value: 'newhandler', name: '&#43 New Handler', logic: '' },
    ];

    const upAll = debounce(() => this.__upSel(), 0);
    model.listenTo(em, 'component:toggled', upAll);

    const update = debounce(() => this.__onUp(), 0);
    model.listenTo(em, 'event:update', update);

    return this;
  }
  __upSel() {
    this.select(this.em.getSelected());
  }

  __onUp() {
    this.select(this.getSelected());
  }

  select(component?: Component) {
    const events = component ? component.getEvents() : [];
    this.model.set({ component, events });
    this.__trgCustom();
  }

  getSelected(): Component | undefined {
    return this.model.get('component');
  }

  /**
   * Get events from the currently selected component.
   */
  getCurrent(): Event[] {
    return this.model.get('events') || [];
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
   * Get Events viewer
   * @private
   */
  getEventsViewer() {
    return this.view;
  }

  /**
   * Add new event type
   * @param {string} name Type name
   * @param {Object} methods Object representing the event
   */
  addType<T>(name: string, event: CustomEvent<T>) {
    const baseView = this.getType('text');
    //@ts-ignore
    this.types[name] = baseView.extend(event);
    // this.set
  }

  /**
   * Get event type
   * @param {string} name Type name
   * @return {Object}
   */
  getType(name: string) {
    return this.getTypes()[name];
  }

  /**
   * Get all event types
   * @returns {Object}
   */
  getTypes() {
    return this.types;
  }

  render() {
    let { view, em } = this;
    const config = this.getConfig();
    const el = view && view.el;
    view = new EventsView(
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
