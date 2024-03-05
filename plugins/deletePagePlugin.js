deletePagePlugin = (editor, opts = {}) => {
  editor.Panels.addButton('options', {
    id: 'delete-page',
    className: 'fa fa-minus-square-o',
    command: 'delete-page',
    attributes: { title: 'delete Page' },
  });

  // Add the command
  editor.Commands.add('delete-page', {
    run: function (editor, sender) {
      const pages = editor.Pages;
      const mainPage = pageManager.getMain();
      if (pages.select(mainPage)) {
        return;
      } else {
        const selectedPage = pages.getSelected();
        if (selectedPage) {
          pages.remove(selectedPage);
        }
        selectedPage = pages.select(mainPage);
      }
    },
  });
};
