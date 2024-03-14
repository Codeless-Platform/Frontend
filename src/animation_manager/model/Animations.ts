import { isArray } from 'underscore';
import { AddOptions, Collection } from '../../common';
import Component from '../../dom_components/model/Component';
import EditorModel from '../../editor/model/Editor';
import Animation, { AnimationProperties } from './Animation';
import AnimationFactory from './AnimationFactory';

export default class Animations extends Collection<Animation> {
  em: EditorModel;
  target!: Component;
  tf: AnimationFactory;

  constructor(coll: AnimationProperties[], options: { em: EditorModel }) {
    super(coll);
    this.em = options.em;
    this.listenTo(this, 'add', this.handleAdd);
    this.listenTo(this, 'reset', this.handleReset);
    const tm = this.em?.Animations;
    const tmOpts = tm?.getConfig();
    this.tf = new AnimationFactory(tmOpts);
  }

  handleReset(coll: AnimationProperties[], { previousModels = [] }: { previousModels?: Animation[] } = {}) {
    previousModels.forEach(model => model.trigger('remove'));
  }

  handleAdd(model: Animation) {
    model.em = this.em;
    const target = this.target;

    if (target) {
      model.target = target;
    }
  }

  setTarget(target: Component) {
    this.target = target;
    this.models.forEach(animation => animation.setTarget(target));
  }

  add(model: string | AnimationProperties | Animation, options?: AddOptions): Animation;
  add(models: Array<string | AnimationProperties | Animation>, options?: AddOptions): Animation[];
  add(models: unknown, opt?: AddOptions): any {
    if (models == undefined) {
      return undefined;
    }
    const { target, em } = this;

    if (isArray(models)) {
      var animations: Animation[] = [];
      for (var i = 0, len = models.length; i < len; i++) {
        const animation = models[i];
        animations[i] = animation instanceof Animation ? animation : this.tf.build(animation, em);
        animations[i].setTarget(target);
      }
      return super.add(animations, opt);
    }
    const animation = models instanceof Animation ? models : this.tf.build(models as any, em);
    animation.setTarget(target);

    return super.add(animation, opt);
  }
}
