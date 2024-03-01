addPagePlugin = (editor, opts = {}) => {
    // Add button to the options panel
    editor.Panels.addButton('options', {
        id: 'add-page',
        className: 'fa fa-plus',
        command: 'add-page',
        attributes: { title: 'Add Page' },
    });

    // Define the command for adding a new page
    editor.Commands.add('add-page', {
        run: (editor, sender) => {
            // Create a new page
            const newPage = editor.DomComponents.addComponent({
                tagName: 'div',
                type: 'page', // Assuming 'page' is the component type for a page
                content: 'New Page Content', // You can set initial content here
            });

            // Add the new page to the pagemanager
            const pageManager = editor.Pages;
            if (pageManager) {
                pageManager.add(newPage);
            }

            // Trigger an event or do any necessary post-processing
            editor.trigger('pageAdded', newPage);

            // Notify that the command has been executed
            sender && sender.set('active', 0);
        },
    });
};
