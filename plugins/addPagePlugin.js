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

            // Add a new Page
            const newPage = pages.add({
                id: 'page-id-' + Date.now(), // Unique ID for the page
                styles: '.my-class { color: red }',
                tagname: 'div',
                component: `<div class="page-container"><div class="my-class">My Page ${1}</div></div>`, // Incrementing the page number
            });

            // Select the newly added page
            pages.select(newPage);

            // Get the HTML/CSS code from the page component
            const htmlPage = editor.getHtml('component');
            const cssPage = editor.getCss('component');
            const jsPage = editor.getJs('component');

            // Trigger an event or do any necessary post-processing
            editor.trigger('pageAdded', newPage);

            // Notify that the command has been executed
            sender && sender.set('active', 0);



            // // Create a new page
            // const newPage = editor.DomComponents.addComponent({
            //     tagName: 'div',
            //     type: 'page', // Assuming 'page' is the component type for a page
            //     content: 'New Page Content', // You can set initial content here
            // });

            // // Add the new page to the pagemanager
            // const pageManager = editor.Pages;
            // if (pageManager) {
            //     pageManager.add(newPage);
            // }

            // // Trigger an event or do any necessary post-processing
            // editor.trigger('pageAdded', newPage);

            // // Notify that the command has been executed
            // sender && sender.set('active', 0);
        },
    });
};
