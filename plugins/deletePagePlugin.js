deletePagePlugin = (editor, opts = {}) => {
editor.Panels.addButton('options', {
    id: 'delete-page',
    className: 'fa fa-minus-square-o',
    command: 'delete-page',
    attributes: { title: 'Delete Page' },
});

// Add the command
editor.Commands.add('delete-page', {
    run: function (editor, sender) {
        const pages = editor.Pages;
        const allPages = pages.getAll();

        // Ensure there's more than one page before attempting to delete
        if (allPages.length <= 1) {
            console.warn("Cannot delete the first and only page.");
            return;
        }

        // Get the last page
        const lastPage = allPages[allPages.length - 1]; 

        // Remove the last page
        pages.remove(lastPage);

        // Display modified list of stored pages after deleting the last one
        const updatedPages = pages.getAll();
        console.log("Updated list of stored pages:");
        updatedPages.forEach(page => {
            console.log("Page ID:", page.id);
        });

        // Select the last stored page
        pages.select(updatedPages[updatedPages.length - 1]);
    },
});
};
