export interface AnimationManagerConfig {
  /**
   * Style prefix.
   * @default 'anm-'
   */
  stylePrefix?: string;

  /**
   * Specify the element to use as a container, string (query) or HTMLElement.
   * With the empty value, nothing will be rendered.
   * @default ''
   */
  appendTo?: string | HTMLElement;

  /**
   * Avoid rendering the default Animation Manager UI.
   * @default false
   */
  custom?: boolean;

  optionsTarget?: Record<string, any>[];
}

const config: AnimationManagerConfig = {
  stylePrefix: 'anm-',
  appendTo: '',
  optionsTarget: [{ value: false }, { value: '_blank' }],
  custom: false,
};

export default config;
