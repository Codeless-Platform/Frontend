import { EventManagerConfig } from '../config/config';
import { isString } from 'underscore';
import Event, { EventProperties } from './Event';
import EditorModel from '../../editor/model/Editor';
import Component from '../../dom_components/model/Component';

export default class EventFactory {
  target!: Component;
  config: Partial<EventManagerConfig>;

  constructor(config: Partial<EventManagerConfig> = {}) {
    this.config = config;
  }

  /**
   * Build props object by their name
   */
  build(prop: string | EventProperties, em: EditorModel): Event {
    return isString(prop) ? this.buildFromString(prop, em) : new Event(prop, em);
  }

  private buildFromString(name: string, em: EditorModel): Event {
    const obj: EventProperties = {
      name: name,
      eventx: [
        { value: 'click', name: 'onclick' },
        { value: 'dblclick', name: 'ondoubleclick' },
        {
          value: 'none',
          name: 'none',
        },
      ],

      handler: [
        { value: 'fullscreen', name: 'fullscreen' },
        { value: 'resize', name: 'resize' },
        { value: 'redirect to url', name: 'redirect to url' },

        {
          value: 'none',
          name: 'none',
        },
      ],
      // eventx2: [],

      changeProp: true,
    };

    switch (name) {
      case 'target':
        obj.type = 'select';
        obj.default = false;
        obj.options = this.config.optionsTarget;
        break;
    }
    return new Event(obj, em);
  }
}
