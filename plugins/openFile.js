openFile = (editor, opts = {}) => {
  editor.Panels.addButton('options', {
    id: 'open-grapesjs-file',
    className: 'fa fa-folder-open-o',
    command: 'open-grapesjs-file',
    attributes: { title: 'Open grapesjs file' },
  });

  // Add the command
  editor.Commands.add('open-grapesjs-file', {
    run: function (editor, sender) {
      sender && sender.set('active'); // turn off the button
      openGrapesJsFile(editor);
    },
  });

  function openGrapesJsFile(editor) {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // Listen for file selection
    fileInput.addEventListener('change', function () {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        const projectData = JSON.parse(e.target.result);
        editor.loadProjectData(projectData);
      };
      reader.readAsText(file);

      // Remove the file input element
      document.body.removeChild(fileInput);
    });

    // Trigger file selection
    fileInput.click();
  }
};
