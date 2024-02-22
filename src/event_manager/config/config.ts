export interface EventManagerConfig {
  /**
   * Style prefix.
   * @default 'evt-'
   */
  stylePrefix?: string;

  /**
   * Specify the element to use as a container, string (query) or HTMLElement.
   * With the empty value, nothing will be rendered.
   * @default ''
   */
  appendTo?: string | HTMLElement;

  /**
   * Avoid rendering the default Event Manager UI.
   * @default false
   */
  custom?: boolean;

  optionsTarget?: Record<string, any>[];
}

const config: EventManagerConfig = {
  stylePrefix: 'evt-',
  appendTo: '',
  optionsTarget: [{ value: false }, { value: '_blank' }],
  custom: false,
};

export default config;
