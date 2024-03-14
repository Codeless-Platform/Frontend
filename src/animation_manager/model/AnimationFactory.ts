import { AnimationManagerConfig } from '../config/config';
import { isString } from 'underscore';
import Animation, { AnimationProperties } from './Animation';
import EditorModel from '../../editor/model/Editor';

export default class AnimationFactory {
  config: Partial<AnimationManagerConfig>;

  constructor(config: Partial<AnimationManagerConfig> = {}) {
    this.config = config;
  }

  /**
   * Build props object by their name
   */
  build(prop: string | AnimationProperties, em: EditorModel): Animation {
    return isString(prop) ? this.buildFromString(prop, em) : new Animation(prop, em);
  }

  private buildFromString(name: string, em: EditorModel): Animation {
    const obj: AnimationProperties = {
      name: name,
      type: 'text',
    };

    switch (name) {
      case 'target':
        obj.type = 'select';
        obj.default = false;
        obj.options = this.config.optionsTarget;
        break;
    }
    return new Animation(obj, em);
  }
}
