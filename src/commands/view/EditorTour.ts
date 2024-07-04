import Shepherd from 'shepherd.js';
import EditorView from '../../editor/view/EditorView';
import { CommandObject } from './CommandAbstract';

export default {
  run(ed, sender) {
    sender.set('active', true);
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true,
        },
        classes: 'shadow-md bg-purple-dark',
        scrollTo: { behavior: 'smooth', block: 'center' },
      },
    });

    tour.addStep({
      id: 'intro',
      title: 'Welcome',
      text: 'Welcome to the CODELESS editor!',
      attachTo: {
        element: 'body',
        on: 'top',
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'panel',
      title: 'Canvas',
      text: "This is the canvas. Here, you will design pages for your project. Each page is composed of Blocks. Blocks are made up of coding elements that we've simplified down to a drag-and-drop feature. This allows you to manipulate the layout and functionality of each page with ease and simplicity.",
      attachTo: {
        element: '.gjs-editor',
        on: 'right',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'blockManager',
      title: 'Blocks Manager',
      text: 'Here you will find the list of blocks (grouped by category) available in the selected library. To use them, just drag and drop them into the canvas. It’s that simple!',
      attachTo: {
        element: '#open-blocks',
        on: 'right',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'template-pages',
      title: 'Templates',
      text: "Here you'll find templates for multipage and single-page websites to help you save time on your projects. Feel free to customize any element, just click on the template and use it!",
      attachTo: {
        element: '#template-pages',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'pages-wrp',
      title: 'Pages Panel',
      text: "Here, you can manage all of your project's pages in the Pages panel. You can add, delete, and change the name of each page by clicking on hand icon.",
      attachTo: {
        element: '.pages-wrp',
        on: 'left',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'open-layers',
      title: 'Layers',
      text: 'Here, you can manage all the Blocks on the selected page. The Body block is the root block for each page, holding all other blocks.Changes to the Body affect all blocks above it, but changes to higher blocks override Body changes. This also applies to a Grid within a Section, as the Grid is higher in the hierarchy.',
      attachTo: {
        element: '#open-layers',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'open-an',
      title: 'Animation Manager',
      text: 'Here, you can create and manage animations for your page. You can easily add animations to different elements on your page, such as text, images, or buttons. You can choose from a variety of animation styles and customize the duration, delay, but you have to select an element first.',
      attachTo: {
        element: '#open-an',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'open-em',
      title: 'Event Manager',
      text: 'Here, you can create and manage events and handlers for more interactive pages. You can easily add events to different elements on your page, such as text, images, or buttons. You can choose from a variety of handlers and events, or you can customize your own script by clicking on (New Handler), but you have to select an element first.',
      attachTo: {
        element: '#open-em',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'open-tm',
      title: 'Trait Manager',
      text: 'Here, you can find a list of traits for each component which allows you to add attributes, APIs, placeholders and much more.',
      attachTo: {
        element: '#open-tm',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'open-sm',
      title: 'Style Manager',
      text: 'Style Manager lets you easily customize the look of your webpage elements, such as text and buttons, without needing to write CSS code. You can adjust properties like size, color, and spacing using simple controls. It also allows you to create and apply custom styles to maintain consistency across your site, but you have to select an element first.',
      attachTo: {
        element: '#open-sm',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'export',
      title: 'Export To Zip',
      text: 'This allows you to export the whole project as a zip file and save it on your PC.',
      attachTo: {
        element: '#export',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'open',
      title: 'Open .codeless',
      text: 'This allows you to open an existing codeless file to modify it as you need.',
      attachTo: {
        element: '#open',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'save',
      title: 'Save .codeless',
      text: 'This allows you to save your project as a codeless file, so you can return to it later.',
      attachTo: {
        element: '#save',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'preview',
      title: 'Preview',
      text: 'This allows you to preview only the current selected page.',
      attachTo: {
        element: '#preview',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'clear',
      title: 'Clear Canvas',
      text: 'This allows you to clear canvas of the current selected page',
      attachTo: {
        element: '#clear',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });
    tour.addStep({
      id: 'clear',
      title: 'AI Chat',
      text: 'We all need help from AI, so this will open a chat with AI that will help you through your journey while implementing your webpage.',
      attachTo: {
        element: '#ai',
        on: 'top',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });
    tour.addStep({
      id: 'change-theme',
      title: 'Change Theme',
      text: "You can customize the theme of your editor, keeping in mind that it Initially follows the system's default mode.",
      attachTo: {
        element: '#change-theme',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });
    tour.addStep({
      id: 'toolbar',
      title: 'Toolbar',
      text: 'Some commands help you while creating your webpage,like delete and duplicate component.',
      attachTo: {
        element: '.gjs-toolbar',
        on: 'right',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });
    tour.addStep({
      id: 'devices',
      title: 'Devices for Responsive Webpage',
      text: 'Devices are used to define different breakpoints for responsive design. Each device represents a specific screen size or device type, such as desktop, tablet, or mobile. These devices can be configured in the Codeless settings to define the available breakpoints and their corresponding widths. This allows you to create responsive layouts that adapt to different screen sizes and devices.',
      attachTo: {
        element: '.gjs-devices',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'end',
      title: 'Well Done!',
      text: "Congratulations! You've completed the Editor Tour and are now ready to start building your webpages with Codeless.Let your creativity flow and enjoy the process of designing your next project!",
      attachTo: {
        element: 'body',
        on: 'top',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
        },
        {
          text: 'Finish',
          action: tour.complete,
        },
      ],
    });

    tour.start();
  },
} as CommandObject<EditorView>;
