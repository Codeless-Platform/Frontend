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
            if (email_input.value !== '' && pass_input.value !== '' && name_input.value !== '') {
                e.preventDefault();

                console.log('Your Name is:', name_input.value);
                console.log('Your Email is:', email_input.value);
                console.log('Your Pass is:', pass_input.value);


                const apiLink = 'http://localhost:1337/api/auth/local/register';

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
        media: `<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512">
        <path
          d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm138.1 297.9c-7.8 7.8-20.5 7.8-28.3 0L256 274.3l-109.8 55.6c-7.8 3.9-17.2 1.1-22.1-5.9-4.9-7-6.1-16.1-3.3-24.3l21.9-87.5-79.7-67.7c-8.7-7.4-10.2-20.5-3-29.7 7.2-9.2 20.5-10.7 29.7-3l74.6 63.3 21.7-86.7c2.8-11.2 14.1-18.4 25.3-15.6 11.2 2.8 18.4 14.1 15.6 25.3l-21.7 86.9 68.3 57.9c11.2 9.5 13.4 26.3 4.8 38.3z"
        />
      </svg>
      `,
        category: 'Auth Pages',
        content: { type: 'signup-with-js' },
    });
};
