signup = (editor, opts = {}) => {
  // const script1 = function () {
  //   const name_input = document.getElementsByClassName('name')[0];
  //   const email_input = document.getElementsByClassName('email')[0];
  //   const pass_input = document.getElementsByClassName('pass')[0];
  //   const send_Btn = document.getElementsByClassName('signupBtn')[0];
  //   const form = document.querySelector('form');

  //   if (email_input.value === 'Initial value') {
  //     email_input.focus();
  //   }

  //   send_Btn.addEventListener('click', function (e) {
  //     if (
  //       email_input.value !== '' &&
  //       pass_input.value !== '' &&
  //       name_input.value !== ''
  //     ) {
  //       e.preventDefault();

  //       console.log('Your Name is:', name_input.value);
  //       console.log('Your Email is:', email_input.value);
  //       console.log('Your Pass is:', pass_input.value);

  //       //const apiLink = 'http://localhost:1337/api/auth/local/register';
  //       // const jwtToken = form.getAttribute('JwtToken');
  //       apiLink = form.getAttribute('API');

  //       // Include the JWT token in your request headers
  //       const requestOptions = {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: `{"username": "${name_input.value}","email": "${email_input.value}","password": "${pass_input.value}"}`,
  //       };

  //       // Replace the API endpoint with your actual API endpoint
  //       fetch(apiLink, requestOptions)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log('Response from the server:', data);
  //           alert('Sign Up Successfully');
  //         })
  //         .catch((error) => {
  //           console.error('Error:', error);
  //         });
  //     }
  //   });
  // };
  const script1 = function () {
    document.querySelector('.signupBtn').style.cursor = 'pointer';
    const name_input = document.querySelector('.name');
    const email_input = document.querySelector('.email');
    const pass_input = document.querySelector('.pass');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const apiLink = 'http://localhost:1337/api/auth/local/register';
      const pageName = form.getAttribute('pageName');

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"username": "${name_input.value}","email": "${email_input.value}","password": "${pass_input.value}"}`,
      };

      // Replace the API endpoint with your actual API endpoint
      fetch(apiLink, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              'Username or email or password already taken,try again ...'
            );
          }
          return response.json();
        })
        .then((data) => {
          // console.log("Response from the server:", data);
          alert('Sign Up Successfully');
          window.location.href = `${pageName}.html`;
        })
        .catch((error) => {
          document.querySelector('.name').value = '';
          document.querySelector('.pass').value = '';
          document.querySelector('.email').value = '';

          alert(error);
        });
    });
  };
  editor.Components.addType('signup-with-js', {
    model: {
      defaults: {
        tagName: 'form',
        components: `
                <label for="name-field">Full Name:</label>
                <input class="name" type="text" minlength="3" required/>
                <br>
                
                <label for="email-field">Email Address:</label>
                <input class="email" type="email" required/>
                <br>
                
                <label for="pass-field">Password:</label>
                <input class="pass" type="password" minlength="6" required />
                <br>

                <input type="submit" value="SignUp" class="signupBtn" />
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

  editor.BlockManager.add('signup', {
    label: 'signup block',
    media: '<img src="imgs/icons8-user-64.png" width = 50 alt="Company1 Logo">',

    category: 'Auth Pages',
    content: { type: 'signup-with-js' },
  });
};
