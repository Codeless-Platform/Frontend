undo_redo = (editor, opts = {}) => {
  // Add undo/redo buttons
  editor.Panels.addButton('options', [
    {
      id: 'undo',
      className: 'fa fa-undo icon-undo',
      command: function (editor, sender) {
        editor.UndoManager.undo(1);
        sender.set('active', 0);
      },
      attributes: {
        title: 'Undo',
      },
    },
    {
      id: 'redo',
      className: 'fa fa-repeat icon-redo',
      command: function (editor, sender) {
        editor.UndoManager.redo(1);
        sender.set('active', 0);
      },
      attributes: {
        title: 'Redo',
      },
    },
  ]);
};
