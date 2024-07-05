login_signup = (editor, opts = {}) => {
  editor.Components.addType('login_signup', {
    model: {
      defaults: {
        tagName: 'section',
        components: `
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" />
                <div class="formWrapper">
                    <div class="form signup">
                        <header class="signupHeader">Signup</header>
                        <form id="signup">
                            <input type="text" placeholder="Full name" required class="signupName" minlength="3" />
                            <input type="email" placeholder="Email address" required class="signupEmail" />
                            <input type="password" placeholder="Password" minlength="6" required class="signupPass" />
                            <input type="submit" value="Signup" />
                            <div class="signupError error"></div>
                                                                                                                                                                    <div class="signUpSuccess success"></div>

                        </form>
                    </div>
            
                    <div class="form login">
                        <header class="loginHeader">Login</header>
                        <form id="login">
                            <input type="email" placeholder="Email address" required class="loginEmail" />
                            <input type="password" placeholder="Password" required class="loginPass" />
                            <input type="submit" value="Login" />
                            <div class="loginError error"></div>
                            <div class="loginSuccess success"></div>
                        </form>
                    </div>
                </div>
                `,
        styles: `
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: "Poppins", sans-serif;
                }
                section {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .formWrapper {
                    background: #f0faff;
                    position: relative;
                    width: 500px;
                    border-radius: 12px;
                    padding: 20px 30px 120px;
                    background: #4070f4;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .form.login {
                    position: absolute;
                    left: 50%;
                    bottom: -86%;
                    transform: translateX(-50%);
                    width: calc(100% + 220px);
                    padding: 20px 140px;
                    border-radius: 50%;
                    height: 100%;
                    background: #fff;
                    transition: all 0.6s ease;
                }
                .formWrapper.active .form.login {
                    bottom: -15%;
                    border-radius: 35%;
                    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
                }
                .form header {
                    font-size: 30px;
                    text-align: center;
                    color: #fff;
                    font-weight: 600;
                    cursor: pointer;
                }
                .form.login header {
                    color: #333;
                    opacity: 0.6;
                }
                .formWrapper.active .form.login header {
                    opacity: 1;
                }
                .formWrapper.active .signup header {
                    opacity: 0.6;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 10px;
                }
                form input {
                    height: 60px;
                    outline: none;
                    border: none;
                    padding: 0 15px;
                    font-size: 16px;
                    font-weight: 400;
                    color: #333;
                    border-radius: 8px;
                    background: #fff;
                }
                .form.login input {
                    border: 1px solid #aaa;
                }
                .form.login input:focus {
                    box-shadow: 0 1px 0 #ddd;
                }
                form a {
                    color: #333;
                    text-decoration: none;
                }
                form a:hover {
                    text-decoration: underline;
                }
                form input[type="submit"] {
                    margin-top: 15px;
                    padding: none;
                    font-size: 18px;
                    font-weight: 500;
                    cursor: pointer;
                }
                .form.login input[type="submit"] {
                    background: #4070f4;
                    color: #fff;
                    border: none;
                }
                .error {
                    color: red;
                    font-size: 14px;
                }
                                    .success {
                    color: black;
                    font-size: 14px;
                }


                @media (max-width: 768px) {
                    .formWrapper {
                        width: 100%;
                        padding: 20px;
                        height: 400px;
                    }
                    .form.login {
                        width: 100%;
                        padding: 20px;
                    }
                    form input,
                    .form.login input {
                        font-size: 14px;
                        padding: 0 10px;
                        height: 50px;
                    }
                    .form header {
                        font-size: 25px;
                    }
                }
                @media (max-width: 480px) {
                    .formWrapper {
                        width: 100%;
                        padding: 10px;
                    }
                    .form.login {
                        padding: 10px;
                    }
                    form input,
                    .form.login input {
                        font-size: 12px;
                        padding: 0 5px;
                    }
                }
            `,
        script: `
            const loginForm = document.querySelector('#login');
            const section = document.querySelector('section');
            const loginError = document.querySelector('.loginError');
                                    const loginSuccess = document.querySelector('.loginSuccess');


            loginForm.addEventListener('submit', function (e) {
              e.preventDefault();
              loginError.textContent = '';
              loginSuccess.textContent='';

              const email = document.querySelector('.loginEmail').value;
              const password = document.querySelector('.loginPass').value;

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
              const pageNameLogin = section.getAttribute('pageName-login');

              fetch(apiLink, requestOptions)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error('User name or password are wrong, try again..');
                  }
                  return response.json();
                })
                .then((data) => {
                            loginSuccess.textContent='Loged in successfully.'

                  const jwt = data.jwt;
                  sessionStorage.setItem('jwt', jwt);
                  if (pageNameLogin === null) {
                    return;
                  } else {
                    window.location.href = pageNameLogin + ".html";
                  }
                })
                .catch((error) => {
                  loginError.textContent = 'User name or password are wrong, try again..';
                  document.querySelector('.loginEmail').value = '';
                  document.querySelector('.loginPass').value = '';
                });
            });

            const name_input = document.querySelector(".signupName");
            const email_input = document.querySelector(".signupEmail");
            const pass_input = document.querySelector(".signupPass");
            const signupForm = document.querySelector("#signup");
            const signupError = document.querySelector('.signupError');
                                    const signupSuccess = document.querySelector('.signUpSuccess');


            signupForm.addEventListener("submit", function (e) {
              e.preventDefault();
              signupError.textContent = '';
                              signupSuccess.textContent = '';


              const apiLink = "http://localhost:1337/api/auth/local/register";
              const pageNameSignup = section.getAttribute("pageName-signup");

              const requestOptions = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: name_input.value,
                  email: email_input.value,
                  password: pass_input.value,
                }),
              };

              fetch(apiLink, requestOptions)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Username or email or password already taken, try again ...");
                  }
                  return response.json();
                })
                .then((data) => {
                          signupSuccess.textContent='Signed Up Successfully';

                  const jwt = data.jwt;
                  sessionStorage.setItem('jwt', jwt);
                  if (pageNameSignup === null) {
                    return;
                  } else {
                    window.location.href = pageNameSignup + ".html";
                  }
                })
                .catch((error) => {
                  signupError.textContent = 'Username or email or password already taken, try again ...';
                  name_input.value = "";
                  email_input.value = "";
                  pass_input.value = "";
                });
            });

            const formWrapper = document.querySelector('.formWrapper'),
                  signupHeader = document.querySelector('.signupHeader'),
                  loginHeader = document.querySelector('.loginHeader');

            loginHeader.addEventListener('click', () => {
              formWrapper.classList.add('active');
            });
            signupHeader.addEventListener('click', () => {
              formWrapper.classList.remove('active');
            });
            `,
        droppable: false,
        traits: [
          {
            type: 'text',
            name: 'pageName-login',
            label: 'Go to Page after login',
            placeholder: 'name of page you want to go',
          },
          {
            type: 'text',
            name: 'pageName-signup',
            label: 'Go to Page after signup',
            placeholder: 'name of page you want to go',
          },
        ],
      },
    },
  });

  editor.BlockManager.add('login_signup', {
    label: 'Blue Login & SignUp',
    media: '<img src="imgs/login_signup.png" width ="50px" height="50px">',
    category: 'Auth Pages',
    content: { type: 'login_signup' },
  });
};
