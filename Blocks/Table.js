table = (editor, opts = {}) => {
  // Company2 Landing Page
  editor.Components.addType('table', {
    model: {
      defaults: {
        tagName: 'table',
        components: `
        <tbody>
        <tr>
          <td>Insert Your text here</td>
          <td>Insert Your text here</td>
        </tr>
        <tr>
          <td>Insert Your text here</td>
          <td>Insert Your text here</td>
        </tr>
        </tbody>
      `,
      },
    },
  });
  editor.BlockManager.add('Table', {
    label: 'Company2 Block',
    media:
      '<img src="imgs/icons8-company-50.png" width = 50 alt="Company1 Logo">',
    category: 'x',
    content: {
      type: 'table',
    },
  });
};
