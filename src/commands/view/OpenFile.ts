import { CommandObject } from './CommandAbstract';

export default {
  run(ed, s) {
    if (s && typeof s.set === 'function') {
      s.set('active', 0);
    }

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // Listen for file selection
    const onFileChange = function () {
      const file = fileInput?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const projectData = JSON.parse(e.target?.result as string);
          ed.loadProjectData(projectData);
        };
        reader.readAsText(file);
      }

      // Clean up
      fileInput.removeEventListener('change', onFileChange);
      document.body.removeChild(fileInput);
    };

    fileInput.addEventListener('change', onFileChange);

    // Trigger file selection
    fileInput.click();
  },
} as CommandObject;
