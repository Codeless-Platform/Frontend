import { PanelProperties } from '../model/Panel';

const swv = 'sw-visibility';
const expt = 'export-template';
const osm = 'open-sm';
const otm = 'open-tm';
const oem = 'open-em';
const oan = 'open-an';
const ola = 'open-layers';
const obl = 'open-blocks';
const ful = 'fullscreen';
const prv = 'preview';
const theme = 'change-theme';
const clr = 'clear';
const un = 'undo';
const re = 'redo';
const sv = 'save';
const op = 'open';
const ex = 'export';

interface ButtonProps {
  id?: string;
  active?: boolean;
  togglable?: boolean;
  className?: string;
  command?: string | (() => any);
  context?: string;
  attributes?: Record<string, any>;
}

interface PanelProps extends Omit<PanelProperties, 'id' | 'buttons'> {
  id?: string;
  buttons?: ButtonProps[];
}

export interface PanelsConfig {
  stylePrefix?: string;

  /**
   * Default panels.
   */
  defaults?: PanelProps[];
}

const config: PanelsConfig = {
  stylePrefix: 'pn-',
  defaults: [
    {
      id: 'commands',
      buttons: [{}],
    },
    {
      id: 'options',
      buttons: [
        {
          id: 'change-theme',
          className: 'fa fa-moon-o',
          command: theme,
          context: theme,
          attributes: { title: 'Change theme' },
        },
        {
          active: false,
          id: swv,
          className: 'fa fa-square-o',
          command: 'core:component-outline',
          context: swv,
          attributes: { title: 'View components' },
        },
        {
          id: prv,
          className: 'fa fa-eye',
          command: prv,
          context: prv,
          attributes: { title: 'Preview Current Page' },
        },
        {
          id: ful,
          className: 'fa fa-arrows-alt',
          command: ful,
          context: ful,
          attributes: { title: 'Fullscreen' },
        },
        {
          id: expt,
          className: 'fa fa-code',
          command: expt,
          attributes: { title: 'View code' },
        },
        {
          id: clr,
          className: 'fa fa-trash',
          command: 'clear-page',
          attributes: { title: 'Clear Page' },
        },
        {
          id: un,
          className: 'fa fa-undo icon-undo',
          command: 'undo',
          attributes: {
            title: 'Undo',
          },
        },
        {
          id: re,
          className: 'fa fa-repeat icon-redo',
          command: 'redo',
          attributes: {
            title: 'Redo',
          },
        },
        {
          id: sv,
          className: 'fa fa-floppy-o',
          command: 'save-as-grapesjs',
          attributes: { title: 'save-as-grapesjs file' },
        },
        {
          id: op,
          className: 'fa fa-folder-open-o',
          command: 'open-grapesjs-file',
          attributes: { title: 'Open grapesjs file' },
        },
        {
          id: ex,
          className: 'fa fa-download',
          command: 'gjs-export-zip',
          attributes: {
            title: 'Export to zip',
          },
        },
        {
          id: 'start-tour',
          className: 'fa fa-question-circle',
          command: 'start-tour',
          attributes: { title: 'Editor Tour' },
        },
      ],
    },
    {
      id: 'views',
      buttons: [
        {
          id: osm,
          className: 'fa fa-paint-brush',
          command: osm,
          active: true,
          togglable: false,
          attributes: { title: 'Open Style Manager' },
        },
        {
          id: otm,
          className: 'fa fa-cog',
          command: otm,
          togglable: false,
          attributes: { title: 'Settings' },
        },
        {
          id: oem,
          className: 'fa fa-fire',
          command: oem,
          togglable: false,
          attributes: { title: 'JavaScript' },
        },
        {
          id: oan,
          className: 'fa fa-film',
          command: oan,
          togglable: false,
          attributes: { title: 'Animation' },
        },
        {
          id: ola,
          className: 'fa fa-bars',
          command: ola,
          togglable: false,
          attributes: { title: 'Open Layer Manager' },
        },
        {
          id: obl,
          className: 'fa fa-th-large',
          command: obl,
          togglable: false,
          attributes: { title: 'Open Blocks' },
        },
      ],
    },
  ],
};

export default config;
