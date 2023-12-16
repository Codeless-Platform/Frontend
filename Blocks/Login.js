login = (editor, opts = {}) => {
  const script1 = function () {
    const email_input = document.getElementsByClassName('email')[0];
    const pass_input = document.getElementsByClassName('pass')[0];
    const send_Btn = document.getElementsByClassName('sendBtn')[0];
    const form = document.querySelector('form');

    if (email_input.value === 'Initial value') {
      email_input.focus();
    }

    send_Btn.addEventListener('click', function (e) {
      if (email_input.value !== '' && pass_input.value !== '') {
        e.preventDefault();

        console.log('Your Email is:', email_input.value);
        console.log('Your Pass is:', pass_input.value);

        // Use the provided JWT token
        const jwtToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAyNjQxNzMxLCJleHAiOjE3MDUyMzM3MzF9.9IrGSXsI4Kau8ncqX9MhLSh78mGRoKoDA7mSCqeTRDQ';

        // Include the JWT token in your request headers
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify({
            data: {
              email: email_input.value,
              password: pass_input.value,
            },
          }),
        };

        // Replace the API endpoint with your actual API endpoint
        fetch('http://localhost:1337/api/authontications', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log('Response from the server:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    });
  };
  editor.Components.addType('login-with-js', {
    model: {
      defaults: {
        tagName: 'form',
        components: `
      <label for="email-field">Email Address:</label>
      <input class="email" type="email"></input>
      <br>
      
      <label for="pass-field">Password:</label>
      <input class="pass" type="password"></input>
      <br>
      
      <button class="sendBtn">Send </button>
      `,
        script: script1, // Pass editor as a parameter using bind
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

  editor.BlockManager.add('Login', {
    label: 'Login block',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512">
      <path
      d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
      </svg>`,
    category: 'Login Pages',
    content: { type: 'login-with-js' },
  });
};
