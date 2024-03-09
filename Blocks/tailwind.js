tailwind = (editor, opts = {}) => {
  const textColor = [
    'text-transparent',
    'text-black',
    'text-white',
    'text-gray-50',
    'text-gray-100',
    'text-gray-200',
    'text-gray-300',
    'text-gray-400',
    'text-gray-500',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-gray-900',

    'text-red-50',
    'text-red-100',
    'text-red-200',
    'text-red-300',
    'text-red-400',
    'text-red-500',
    'text-red-600',
    'text-red-700',
    'text-red-800',
    'text-red-900',

    'text-yellow-50',
    'text-yellow-100',
    'text-yellow-200',
    'text-yellow-300',
    'text-yellow-400',
    'text-yellow-500',
    'text-yellow-600',
    'text-yellow-700',
    'text-yellow-800',
    'text-yellow-900',

    'text-green-50',
    'text-green-100',
    'text-green-200',
    'text-green-300',
    'text-green-400',
    'text-green-500',
    'text-green-600',
    'text-green-700',
    'text-green-800',
    'text-green-900',

    'text-blue-50',
    'text-blue-100',
    'text-blue-200',
    'text-blue-300',
    'text-blue-400',
    'text-blue-500',
    'text-blue-600',
    'text-blue-700',
    'text-blue-800',
    'text-blue-900',

    'text-indigo-50',
    'text-indigo-100',
    'text-indigo-200',
    'text-indigo-300',
    'text-indigo-400',
    'text-indigo-500',
    'text-indigo-600',
    'text-indigo-700',
    'text-indigo-800',
    'text-indigo-900',

    'text-purple-50',
    'text-purple-100',
    'text-purple-200',
    'text-purple-300',
    'text-purple-400',
    'text-purple-500',
    'text-purple-600',
    'text-purple-700',
    'text-purple-800',
    'text-purple-900',

    'text-pink-50',
    'text-pink-100',
    'text-pink-200',
    'text-pink-300',
    'text-pink-400',
    'text-pink-500',
    'text-pink-600',
    'text-pink-700',
    'text-pink-800',
    'text-pink-900',
  ];

  const textAlignment = [
    'text-left',
    'text-center',
    'text-right',
    'text-justify',
  ];

  const textOpacity = [
    'text-opacity-0',
    'text-opacity-5',
    'text-opacity-10',
    'text-opacity-20',
    'text-opacity-25',
    'text-opacity-30',
    'text-opacity-40',
    'text-opacity-50',
    'text-opacity-60',
    'text-opacity-70',
    'text-opacity-75',
    'text-opacity-80',
    'text-opacity-90',
    'text-opacity-95',
    'text-opacity-100',
  ];

  const textDecoration = ['underline', 'line-through', 'no-underline'];

  const textTransformation = [
    'uppercase',
    'lowercase',
    'capitalize',
    'normal-case',
  ];

  const textOverflow = ['truncate', 'overflow-ellipsis', 'overflow-clip'];

  const textFontSize = [
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    'text-9xl',
  ];

  const fontWeight = [
    'font-thin',
    'font-extralight',
    'font-light',
    'font-normal',
    'font-medium',
    'font-semibold',
    'font-bold',
    'font-extrabold',
    'font-black',
  ];

  const fontVariant = [
    'normal-nums',
    'ordinal',
    'slashed-zero',
    'lining-nums',
    'oldstyle-nums',
    'proportional-nums',
    'tabular-nums',
    'diagonal-fractions',
    'stacked-fractions',
  ];

  const letterSpacing = [
    'tracking-tighter',
    'tracking-tight',
    'tracking-normal',
    'tracking-wide',
    'tracking-wider',
    'tracking-widest',
  ];

  const lineHeight = [
    'leading-3',
    'leading-4',
    'leading-5',
    'leading-6',
    'leading-7',
    'leading-8',
    'leading-9',
    'leading-10',
    'leading-none',
    'leading-tight',
    'leading-snug',
    'leading-normal',
    'leading-relaxed',
    'leading-loose',
  ];

  const verticalAlign = [
    'align-baseline',
    'align-top',
    'align-middle',
    'align-bottom',
    'align-text-top',
    'align-text-bottom',
  ];

  const wordBreak = ['break-normal', 'break-words', 'break-all'];
  const tableBorder = ['border-collapse', 'border-separate'];
  const tableLayout = ['table-auto', 'table-fixed'];

  const backgroundAttachment = ['bg-fixed', 'bg-local', 'bg-scroll'];
  const backgroundClip = [
    'bg-clip-border',
    'bg-clip-padding',
    'bg-clip-content',
    'bg-clip-text',
  ];

  const bgColor = [
    'bg-transparent',
    'bg-black',
    'bg-white',
    'bg-gray-400',
    'bg-gray-700',
    'bg-red-400',
    'bg-red-700',
    'bg-yellow-400',
    'bg-yellow-700',
    'bg-green-400',
    'bg-green-700',
    'bg-blue-400',
    'bg-blue-700',
    'bg-indigo-400',
    'bg-indigo-700',
    'bg-purple-400',
    'bg-purple-700',
    'bg-pink-400',
    'bg-pink-700',
  ];

  const bgRepeat = [
    'bg-repeat',
    'bg-no-repeat',
    'bg-repeat-x',
    'bg-repeat-y',
    'bg-repeat-round',
    'bg-repeat-space',
  ];

  const bgSize = ['bg-auto', 'bg-cover', 'bg-contain'];

  const borderRadius = [
    'rounded-none',
    'rounded',
    'rounded-lg',
    'rounded-full',
  ];

  const borderWidth = [
    'border-0',
    'border-4',
    'border',
    'border-t-4',
    'border-r-4',
    'border-l-4',
    'border-b-4',
  ];

  const borderColor = [
    'border-black',
    'border-gray-500',
    'border-red-500',
    'border-yellow-500',
    'border-green-500',
    'border-blue-500',
    'border-indigo-500',
    'border-purple-500',
    'border-pink-500',
  ];

  const borderStyle = [
    'border-solid',
    'border-dashed',
    'border-dotted',
    'border-double',
    'border-none',
  ];
  let options = {};
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  const dc = editor.DomComponents;

  dc.getTypes().forEach((type) => {
    if (type.id === 'text' || type.id === 'link') {
      dc.addType(type.id, {
        model: {
          defaults: {
            traits: [
              ...type.model.prototype.defaults.traits,
              {
                type: 'class_select',
                options: textColor.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Text Color',
              },
              {
                type: 'class_select',
                name: 'Text_Alignment',
                label: 'Text_Alignment',
                options: [
                  { name: 'text-left', value: 'text-left' },
                  { name: 'text-center', value: 'text-center' },
                  { name: 'text-right', value: 'text-right' },
                ],
              },

              {
                type: 'class_select',
                name: 'text_opcaity',
                options: textOpacity.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Text Opacity',
              },
              {
                type: 'class_select',
                name: 'Text_Decoration',
                options: textDecoration.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Text Decoration',
              },
              {
                type: 'class_select',
                name: 'Transformation',
                options: textTransformation.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Text Transformation',
              },
              {
                type: 'class_select',
                name: 'overflow',
                options: textOverflow.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Text Overflow',
              },
              {
                type: 'class_select',
                name: 'fontSize',
                options: textFontSize.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Font Size',
              },
              {
                type: 'class_select',
                name: 'Weight',
                options: fontWeight.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Font Weight',
              },
              {
                type: 'class_select',
                name: 'variant',
                options: fontVariant.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Font Variant',
              },
              {
                type: 'class_select',
                name: 'Spacing',
                options: letterSpacing.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Letter Spacing',
              },
              {
                type: 'class_select',
                name: 'height',
                options: lineHeight.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Line Height',
              },
              {
                type: 'class_select',
                name: 'Align',
                options: verticalAlign.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Vertical Align',
              },
              {
                type: 'class_select',
                name: 'wordBreak',
                options: wordBreak.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Word Break',
              },
            ],
          },
        },
      });
    }

    if (type.id === 'table') {
      dc.addType(type.id, {
        model: {
          defaults: {
            traits: [
              ...type.model.prototype.defaults.traits,
              {
                type: 'class_select',
                name: 'border',
                options: tableBorder.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Table Border',
              },
              {
                type: 'class_select',
                name: 'layout',
                options: tableLayout.map((color) => ({
                  name: color,
                  value: color,
                })),
                label: 'Table Layout',
              },
            ],
          },
        },
      });
    }

    const toolbar = [
      {
        attributes: {
          class: 'fa fa-arrow-up',
        },
        command: (e) => e.runCommand('core:component-exit', { force: 1 }),
      },
      {
        attributes: {
          class: 'fa fa-arrows gjs-no-touch-actions',
          draggable: true,
        },
        command: 'tlb-move',
      },

      {
        attributes: {
          class: 'fa fa-clone',
        },
        command: 'tlb-clone',
      },
      {
        attributes: {
          class: 'fa fa-trash-o',
        },
        command: 'tlb-delete',
      },
      {
        attributes: {
          class: 'fa fa-toggle-off',
          title: 'free move',
        },
        command: 'toggle-abs-move',
      },
    ];

    if (type.id === 'svg' || type.id === 'svg-in') {
      dc.addType(type.id, {
        model: {
          defaults: {
            traits: [
              ...dc.getType(type.id).model.prototype.defaults.traits,
              {
                type: 'class_select',
                name: 'fill',
                options: [{ name: 'fill-current', value: 'fill-current' }],
                label: 'Fill',
              },
              {
                type: 'class_select',
                name: 'stroke',
                options: [{ name: 'stroke-current', value: 'stroke-current' }],
                label: 'Stroke',
              },
              {
                type: 'class_select',
                name: 'strokeWidth',
                options: [
                  { name: 'stroke-0', value: 'stroke-0' },
                  { name: 'stroke-1', value: 'stroke-1' },
                  { name: 'stroke-2', value: 'stroke-2' },
                ],
                label: 'Stroke Width',
              },
            ],
          },
        },
      });
    }

    let defaultTraits = [];
    if (dc.getType(type.id).model.prototype.defaults.traits) {
      defaultTraits = dc.getType(type.id).model.prototype.defaults.traits;
    }
    dc.addType(type.id, {
      model: {
        defaults: {
          toolbar,
          traits: [
            ...defaultTraits,

            {
              type: 'class_select',
              name: 'BgAttachment',
              options: backgroundAttachment.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'BG Attachment',
            },
            {
              type: 'class_select',
              name: 'BGClip',
              options: backgroundClip.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'BG Clip',
            },
            {
              type: 'class_select',
              name: 'BGColor',
              options: bgColor.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'BG Color',
            },
            {
              type: 'class_select',
              name: 'BGRepeat',
              options: bgRepeat.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'BG Repeat',
            },
            {
              type: 'class_select',
              name: 'BGSize',
              options: bgSize.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'BG Size',
            },

            {
              type: 'class_select',
              name: 'borderRadius',
              options: borderRadius.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'Border Radius',
            },
            {
              type: 'class_select',
              name: 'borderWidth',
              options: borderWidth.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'Border Width',
            },
            {
              type: 'class_select',
              name: 'BorderColor',
              options: borderColor.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'Border Color',
            },
            {
              type: 'class_select',
              name: 'borderStyle',
              options: borderStyle.map((color) => ({
                name: color,
                value: color,
              })),
              label: 'Border Style',
            },
          ],
        },
      },
    });
  });
  const tm = editor.TraitManager;

  tm.addType('class_select', {
    events: {
      change: 'onChange',
    },
    createInput({ trait }) {
      const md = this.model;
      const opts = md.get('options') || [];
      const input = document.createElement('select');
      const target_view_el = this.target.view.el;

      for (let i = 0; i < opts.length; i++) {
        const option = document.createElement('option');
        let value = opts[i].value;
        if (value === '') {
          value = 'text-black';
        }
        option.text = opts[i].name;
        option.value = value;

        const css = Array.from(target_view_el.classList);

        const value_a = value.split(' ');
        const intersection = css.filter((x) => value_a.includes(x));

        if (intersection.length === value_a.length) {
          option.setAttribute('selected', 'selected');
        }

        input.append(option);
      }
      return input;
    },
    onUpdate({ elInput, component }) {
      const classes = component.getClasses();
      const opts = this.model.get('options') || [];
      for (let i = 0; i < opts.length; i++) {
        let value = opts[i].value;
        if (value && classes.includes(value)) {
          elInput.value = value;
          return;
        }
      }
      elInput.value = 'text-black';
    },

    onEvent({ elInput, component, event }) {
      const classes = this.model.get('options').map((opt) => opt.value);
      for (let i = 0; i < classes.length; i++) {
        if (classes[i].length > 0) {
          const classes_i_a = classes[i].split(' ');
          for (let j = 0; j < classes_i_a.length; j++) {
            if (classes_i_a[j].length > 0) {
              component.removeClass(classes_i_a[j]);
            }
          }
        }
      }
      const value = this.model.get('value');
      const elAttributes = component.attributes.attributes;
      delete elAttributes[''];

      if (value.length > 0 && value !== 'text-black') {
        const value_a = value.split(' ');
        for (let i = 0; i < value_a.length; i++) {
          component.addClass(value_a[i]);
        }
      }
      component.em.trigger('component:toggled');
    },
  });
};
