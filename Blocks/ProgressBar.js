

progressbar = (editor, opts = {}) => {

    editor.Components.addType('progressbar', {
    model: {
        defaults: {
        tagName: 'progressbar',
        components: `


<div class="progress">
    <div class="progress-bar" style="width: 50%;">25%</div>
</div>
<style>
    .progress {
        width: 100%;
        height: 30px;
        background-color: #f1f1f1;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    .progress-bar {
        width: 0%;
        height: 100%;
        background-color: #4caf50;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        color: white;
    }
</style>

        `,
        droppable: false,
        traits: [
            'name',
            'placeholder',
            {
              type: 'text', // If you don't specify the type, the `text` is the default one
              name: 'API', // Required and available for all traits
              label: 'API', // The label you will see near the input
              // label: false, // If you set label to `false`, the label column will be removed
              placeholder: 'Insert API', // Placeholder to show inside the input
            },
        ],
        },
    },
    });

    editor.BlockManager.add('progressbar', {
    label: 'Progress Bar',
    media: '<img src="imgs/icons8-progress-bar-50.png" width=70 alt="Progress Bar Logo">',
    category: 'Basic',
    content: { type: 'progressbar' },
});
};
