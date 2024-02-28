saveFile = (editor, opts = {}) => {
  editor.Panels.addButton('options', {
    id: 'save-as-grapesjs',
    className: 'fa fa-floppy-o',
    command: 'save-as-grapesjs',
    attributes: { title: 'save-as-grapesjs file' },
  });

  // Add the command
  editor.Commands.add('save-as-grapesjs', {
    run: function (editor, sender) {
      sender && sender.set('active'); // turn off the button
      // extract data
      const projectData = editor.getProjectData();
      saveAsGrapesJsFile(projectData);
    },
  });

  function saveAsGrapesJsFile(data) {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'project.grapesjs';
    a.click();

    URL.revokeObjectURL(url);
  }
};
