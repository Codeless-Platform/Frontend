import { EventManagerConfig } from '../config/config';
import { isString } from 'underscore';
import Event, { EventProperties } from './Event';
import EditorModel from '../../editor/model/Editor';
import Component from '../../dom_components/model/Component';

export default class EventFactory {
  target!: Component;
  config: Partial<EventManagerConfig>;

  constructor(config: Partial<EventManagerConfig> = {}, target: Component) {
    this.config = config;
    this.target = target;
  }

  /**
   * Build props object by their name
   */
  build(prop: string | EventProperties, em: EditorModel, target: Component): Event {
    return isString(prop) ? this.buildFromString(prop, em, target) : new Event(prop, em, target);
  }

  private buildFromString(name: string, em: EditorModel, target: Component): Event {
    const obj: EventProperties = {
      name: name,
      type: 'NotCustomized',
      eventx: [
        { value: 'click', name: 'onclick' },
        { value: 'dblclick', name: 'ondoubleclick' },
        { value: 'none', name: 'none' },
      ],

      changeProp: true,
    };

    switch (name) {
      case 'target':
        obj.type = 'select';
        obj.default = false;
        obj.options = this.config.optionsTarget;
        break;
    }

    return new Event(obj, em, target);
  }
}
