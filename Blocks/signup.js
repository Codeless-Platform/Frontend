signup = (editor, opts = {}) => {
  const script1 = function () {
    const name_input = document.getElementsByClassName('name')[0];
    const email_input = document.getElementsByClassName('email')[0];
    const pass_input = document.getElementsByClassName('pass')[0];
    const send_Btn = document.getElementsByClassName('signupBtn')[0];
    const form = document.querySelector('form');

    if (email_input.value === 'Initial value') {
      email_input.focus();
    }

    send_Btn.addEventListener('click', function (e) {
      if (
        email_input.value !== '' &&
        pass_input.value !== '' &&
        name_input.value !== ''
      ) {
        e.preventDefault();

        console.log('Your Name is:', name_input.value);
        console.log('Your Email is:', email_input.value);
        console.log('Your Pass is:', pass_input.value);

        //const apiLink = 'http://localhost:1337/api/auth/local/register';
        // const jwtToken = form.getAttribute('JwtToken');
        apiLink = form.getAttribute('API');

        // Include the JWT token in your request headers
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: `{"username": "${name_input.value}","email": "${email_input.value}","password": "${pass_input.value}"}`,
        };

        // Replace the API endpoint with your actual API endpoint
        fetch(apiLink, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log('Response from the server:', data);
            alert('Sign Up Successfully');
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    });
  };
  editor.Components.addType('signup-with-js', {
    model: {
      defaults: {
        tagName: 'form',
        components: `
                <label for="name-field">Full Name:</label>
                <input class="name" type="text"></input>
                <br>
                
                <label for="email-field">Email Address:</label>
                <input class="email" type="email"></input>
                <br>
                
                <label for="pass-field">Password:</label>
                <input class="pass" type="password"></input>
                <br>

                <button class="signupBtn">Sign Up</button>
        `,
        script: script1, // Pass editor as a parameter using bind
        droppable: false,
        traits: [
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

  editor.BlockManager.add('signup', {
    label: 'signup block',
    media: '<img src="imgs/icons8-user-64.png" width = 50 alt="Company1 Logo">',

    category: 'Auth Pages',
    content: { type: 'signup-with-js' },
  });
};
