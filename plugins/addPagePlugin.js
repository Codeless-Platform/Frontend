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
            const pages = editor.Pages;

            // Save current page into local storage
            const currentPageContent = {
                html: editor.getHtml(),
                css: editor.getCss(),
                js: editor.getJs(),
            };
            localStorage.setItem("currentPage", JSON.stringify(currentPageContent));

            // Add a new Page
            const newPageId = 'page-id-' + Date.now();
            const newPage = pages.add({
                id: newPageId,
                styles: '.my-class { color: red }',
                tagName: 'div',
                components: `<div class="page-container"><div class="my-class">My Page ${newPageId}</div></div>`,
            });

            // Select the newly added page
            pages.select(newPage);

            // Trigger an event or do any necessary post-processing
            editor.trigger('pageAdded', newPage);

            // Notify that the command has been executed
            sender && sender.set('active', 0);

            // Display list of all pages in local storage on console
            const allPages = editor.Pages.getAll();
            allPages.forEach(page => {
                console.log("Page ID:", page.id);
            });
        },
    });
};
