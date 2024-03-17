login = (editor, opts = {}) => {
  // const script1 = function () {
  //   const name_input = document.getElementsByClassName('name')[0];
  //   const pass_input = document.getElementsByClassName('pass')[0];
  //   const send_Btn = document.getElementsByClassName('sendBtn')[0];
  //   const form = document.querySelector('form');

  //   if (name_input.value === 'Initial value') {
  //     name_input.focus();
  //   }

  //   send_Btn.addEventListener('click', function (e) {
  //     if (name_input.value !== '' && pass_input.value !== '') {
  //       e.preventDefault();

  //       console.log('Your name is:', name_input.value);
  //       console.log('Your Pass is:', pass_input.value);

  //       // Include the JWT token in your request headers
  //       const requestOptions = {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: `{"identifier": "${name_input.value}", "password": "${pass_input.value}"}`,
  //       };

  //       //const apiLink = 'http://localhost:1337/api/auth/local';
  //       const apiLink = form.getAttribute('API');

  //       // Replace the API endpoint with your actual API endpoint
  //       fetch(apiLink, requestOptions)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log('Response from the server:', data);
  //           alert('Login Successfully');
  //         })
  //         .catch((error) => {
  //           console.error('Error:', error);
  //           alert('Error', error);
  //         });
  //     }
  //   });
  // };
  const script1 = function () {
    document.querySelector('.submitBtn').style.cursor = 'pointer';

    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.querySelector('.name').value;
      const password = document.querySelector('.pass').value;

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: username,
          password: password,
        }),
      };

      const apiLink = 'http://localhost:1337/api/auth/local';
      const pageName = loginForm.getAttribute('pageName');

      fetch(apiLink, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('User name or password are wrong,try again..');
          }
          return response.json();
        })
        .then((data) => {
          // console.log("Response from the server:", data);
          alert('Login Successfully');
          window.location.href = `${pageName}.html`;
        })
        .catch((error) => {
          document.querySelector('.name').value = '';
          document.querySelector('.pass').value = '';
          alert(error);
        });
    });
  };
  editor.Components.addType('login-with-js', {
    model: {
      defaults: {
        tagName: 'form',
        components: `
      <label for="name-field">Full Name:</label>
      <input class="name" type="text" required></input>
      <br>
      
      <label for="pass-field">Password:</label>
      <input class="pass" type="password" required></input>
      <br>
      
      <input type="submit" value="Login" class="submitBtn" />
      `,
        script: script1, // Pass editor as a parameter using bind
        droppable: false,

        traits: [
          {
            type: 'text',
            name: 'pageName',
            label: 'Go to Page',
            placeholder: 'name of page you want to go',
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
    category: 'Auth Pages',
    content: { type: 'login-with-js' },
  });
};
