clearPage = (editor, opts = {}) => {
  editor.Panels.addButton('options', {
    id: 'clear-page',
    className: 'fa fa-trash',
    command: 'clear-page',
    attributes: { title: 'Clear Page' },
  });

  // Add the command
  editor.Commands.add('clear-page', {
    run: function (editor, sender) {
      sender && sender.set('active'); // turn off the button
      editor.DomComponents.clear(); // clear the components
      editor.CssComposer.clear(); // clear the styles
    },
  });
};
