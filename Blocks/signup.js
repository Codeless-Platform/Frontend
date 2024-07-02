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
        tagName: 'section',
        components: `
                <div class="form_container">
                <form>
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
                </form>
                </div>
             
                `,
        styles: `   * {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing:border-box;
                }    
                section{
                            color: #ccc;
                            min-height: 100vh;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                
.form_container {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	                        background: linear-gradient(135deg, #f4f4f4, #ccc);
}

form {
  display: flex;
  flex-direction: column;
}
                
                h1 {
                    text-align: center;
                    color: #333;
                }
                
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                    color: #555;
                }
                
                input[type="text"],
                input[type="email"],
                input[type="password"] {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    box-sizing: border-box;
                    font-size: 16px;
                    color: #333;
                }
                
                input[type="submit"] {
                    width: 100%;
                    padding: 10px;
                    border: none;
                    border-radius: 3px;
                    background: linear-gradient(135deg, #007bff, #0056b3);
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                }
                
                input[type="submit"]:hover {
                    background: linear-gradient(135deg, #0056b3, #003d80);
                }
                
                /* Media queries for tablet */
                @media (max-width: 768px) {
                    form {
                        max-width: 300px;
                        margin: 40px auto;
                        padding: 15px;
                    }
                }
                
                /* Media queries for mobile */
                @media (max-width: 480px) {
                    form {
                        max-width: 250px;
                        margin: 30px auto;
                        padding: 10px;
                    }
                
                    input[type="text"],
                    input[type="email"],
                    input[type="password"],
                    input[type="submit"] {
                        font-size: 14px;
                    }
                }`,
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
      init() {
        this.get('components').forEach((component) => {
          if (component.is('input') && component.getEl().type === 'submit') {
            component.addTrait({
              type: 'text',
              name: 'pageName',
              label: 'Go to Page',
              placeholder: 'Name of page you want to go',
            });
          }
        });
      },
    },
  });

  editor.BlockManager.add('signup', {
    label: 'Light SignUp',
    media: '<img src="imgs/signup.png" width ="50px" height="50px">',
    category: 'Auth Pages',
    content: { type: 'signup-with-js' },
  });
};
