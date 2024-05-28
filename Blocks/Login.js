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

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.querySelector('.email').value;
      const password = document.querySelector('.pass').value;

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
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
          document.querySelector('.email').value = '';
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
      <label for="email-field">Email:</label>
      <input class="email" type="email" required></input>
      <br>
      
      <label for="pass-field">Password:</label>
      <input class="pass" type="password" required></input>
      <br>
      
      <input type="submit" value="Login" class="submitBtn" />
      <style>
      /* Default styles */
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: white;
          background: linear-gradient(135deg, #222, #333);
      }
      
      form {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          border-radius: 5px;
          background-color: #333;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      h1 {
          text-align: center;
      }
      
      label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
      }
      
      input[type="email"],
      input[type="password"] {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #555;
          border-radius: 3px;
          box-sizing: border-box;
          font-size: 16px;
          color: white;
          background-color: #444;
      }
      
      input[type="submit"] {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 3px;
          background-color: #007bff;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
      }
      
      input[type="submit"]:hover {
          background-color: #0056b3;
      }
      
      /* Media queries for tablet */
      @media (max-width: 768px) {
          form {
              max-width: 300px;
              padding: 15px;
          }
      
          input[type="email"],
          input[type="password"],
          input[type="submit"] {
              font-size: 14px;
              padding: 8px;
          }
      }
      
      /* Media queries for mobile */
      @media (max-width: 480px) {
          form {
              max-width: 250px;
              padding: 10px;
          }
      
          input[type="email"],
          input[type="password"],
          input[type="submit"] {
              font-size: 12px;
              padding: 5px;
          }
      }
            </style>
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
    label: 'LoginTemp1',
    media: '<img src="../imgs/login.png" height="50px" width="50px" />',
    category: 'Auth Pages',
    content: { type: 'login-with-js' },
  });
};
