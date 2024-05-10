table = (editor, opts = {}) => {
  editor.Components.addType('table', {
    model: {
      defaults: {
        tagName: 'table',
        components: `
        <tbody>
          <tr>
            <td><div>Insert Your text here</div></td>
            <td><div>Insert Your text here</div></td>
          </tr>
          <tr>
            <td><div>Insert Your text here</div></td>
            <td><div>Insert Your text here</div></td>
          </tr>
        </tbody>
      `,
        style: {
          padding: '5px',
        },
      },
    },
  });
  editor.BlockManager.add('Table', {
    label: 'Table',
    media: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1"/>
              <line x1="2" y1="6" x2="22" y2="6" stroke="currentColor" stroke-width="1"/>
              <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="1"/>
              <line x1="2" y1="18" x2="22" y2="18" stroke="currentColor" stroke-width="1"/>
              <line x1="8" y1="4" x2="8" y2="22" stroke="currentColor" stroke-width="1"/>
              <line x1="16" y1="4" x2="16" y2="22" stroke="currentColor" stroke-width="1"/>
            </svg>`,
    category: 'Custom',
    content: {
      type: 'table',
    },
  });
};
