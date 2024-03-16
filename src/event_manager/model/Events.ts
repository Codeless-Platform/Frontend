import { isArray } from 'underscore';
import { AddOptions, Collection } from '../../common';
import Component from '../../dom_components/model/Component';
import EditorModel from '../../editor/model/Editor';
import Event, { EventProperties } from './Event';
import EventFactory from './EventFactory';

export default class Events extends Collection<Event> {
  em: EditorModel;
  target!: Component;
  tf: EventFactory;

  constructor(coll: EventProperties[], options: { em: EditorModel }) {
    super(coll);
    this.em = options.em;
    this.listenTo(this, 'add', this.handleAdd);
    this.listenTo(this, 'reset', this.handleReset);
    const tm = this.em?.Events;
    const tmOpts = tm?.getConfig();
    this.tf = new EventFactory(tmOpts, this.target);
  }

  handleReset(coll: EventProperties[], { previousModels = [] }: { previousModels?: Event[] } = {}) {
    previousModels.forEach(model => model.trigger('remove'));
  }

  handleAdd(model: Event) {
    model.em = this.em;
    const target = this.target;

    if (target) {
      model.target = target;
    }
  }

  setTarget(target: Component) {
    this.target = target;
    this.models.forEach(event => event.setTarget(target));
  }

  add(model: string | EventProperties | Event, options?: AddOptions): Event;
  add(models: Array<string | EventProperties | Event>, options?: AddOptions): Event[];
  add(models: unknown, opt?: AddOptions): any {
    if (models == undefined) {
      return undefined;
    }
    const { target, em } = this;

    if (isArray(models)) {
      var events: Event[] = [];
      for (var i = 0, len = models.length; i < len; i++) {
        const event = models[i];
        events[i] = event instanceof Event ? event : this.tf.build(event, em, target);
        events[i].setTarget(target);
      }
      return super.add(events, opt);
    }
    const event = models instanceof Event ? models : this.tf.build(models as any, em, target);
    event.setTarget(target);

    return super.add(event, opt);
  }
}
