import { ProjectData } from '../../storage_manager';
import { CommandObject } from './CommandAbstract';

export default {
  run(editor, sender) {
    if (sender && typeof sender.set === 'function') {
      sender.set('active', 0); // turn off the button
    }

    const projectData = editor.getProjectData();
    saveAsGrapesJsFile(projectData);
  },
} as CommandObject;

function saveAsGrapesJsFile(data: ProjectData) {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'project.grapesjs';
  a.click();

  URL.revokeObjectURL(url);
}
