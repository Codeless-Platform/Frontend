colorfulLogin = (editor, opts = {}) => {
  editor.Components.addType('colorfulLogin', {
    model: {
      defaults: {
        tagName: 'section',
        components: `        <div class="wrapper" id="wrapper">
            <div class="form-wrapper sign-up-wrapper">
                <form id="signup">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" required minlength="3" class="signupName" />
                    <input type="email" placeholder="Email" class="signupEmail"  />
                    <input type="password" placeholder="Password" required minlength="6" class="signupPass"/>
                    <input type="submit" value="Sign Up">
                    <div class="signUpError error"></div>
                                                                                                                                        <div class="signUpSuccess success"></div>

                </form>
            </div>
            <div class="form-wrapper sign-in-wrapper">
                <form id="login">
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" required class="loginEmail" />
                    <input type="password" placeholder="Password" required class="loginPass" />
                    <input type="submit" value="Sign In">
                    <div class="loginError error"></div>
                                                                                                                                        <div class="loginSuccess success"></div>

                </form>
            </div>
            <div class="overlay-wrapper">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
`,
        styles: `

    * {
        box-sizing: border-box;

    }

    section {
        background: #f6f5f7;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    }

    section h1 {
        font-weight: bold;
        margin: 0;
    }

    section h2 {
        text-align: center;
    }

    section p {
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
    }

    section span {
        font-size: 12px;
    }

    a {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }

    section input[type=submit],
    section button {
        border-radius: 20px;
        border: 1px solid #FF4B2B;
        background-color: #FF4B2B;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
    }

    section button:active {
        transform: scale(0.95);
    }

    section button:focus {
        outline: none;
    }

    section button.ghost {
        background-color: transparent;
        border-color: #FFFFFF;
    }

    section form {
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
    }

    section input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
    }

    .wrapper {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        position: relative;
        overflow: hidden;
        width: 768px;
        max-width: 100%;
        min-height: 480px;
    }

    .form-wrapper {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in-wrapper {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .wrapper.right-panel-active .sign-in-wrapper {
        transform: translateX(100%);
    }

    .sign-up-wrapper {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .wrapper.right-panel-active .sign-up-wrapper {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
    }

    @keyframes show {

        0%,
        49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%,
        100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .overlay-wrapper {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
    }

    .wrapper.right-panel-active .overlay-wrapper {
        transform: translateX(-100%);
    }

    .overlay {
        background: #FF416C;
        background: -webkit-linear-gradient(to right, #df715e, #ee5176);
        background: linear-gradient(to right, #FF4B2B, #FF416C);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #FFFFFF;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .wrapper.right-panel-active .overlay {
        transform: translateX(50%);
    }

    .error {
        color: red;
        font-size: 14px;
    }

    .success {
        color: blue;
        font-size: 14px;
    }

    .overlay-panel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .overlay-left {
        transform: translateX(-20%);
    }

    .wrapper.right-panel-active .overlay-left {
        transform: translateX(0);
    }

    .overlay-right {
        right: 0;
        transform: translateX(0);
    }

    .wrapper.right-panel-active .overlay-right {
        transform: translateX(20%);
    }

       @media (max-width: 992px) {


        .wrapper {
            width: 650px;
        }

    }

    @media (max-width: 768px) {


        .wrapper {
            width: 550px;
        }

    }

    @media (max-width: 580px) {


        .wrapper {
            width: 450px;
            min-height: 370px;
        }

    }
          @media (max-width: 480px) {


        .wrapper {
            min-height: 350px;
        }
            form{
            padding:5px;
            }
            .overlay-panel{
            padding:5px;
            }

    }
`,
        script: `    
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const wrapper = document.getElementById('wrapper');

        signUpButton.addEventListener('click', () => {
            wrapper.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            wrapper.classList.remove("right-panel-active");
        });
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
                        throw new Error('User name or password are wrong,try again..');
                    }
                    return response.json();
                })
                .then((data) => {
                    // console.log("Response from the server:", data);
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
        const signupError = document.querySelector('.signUpError');                        const signupSuccess = document.querySelector('.signUpSuccess');

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
                        throw new Error(
                            "Username or email or password already taken, try again ..."
                        );
                    }
                    return response.json();
                })
                .then((data) => {
                            signupSuccess.textContent='Signed Up Successfully';

                    const jwt = data.jwt;
                    sessionStorage.setItem('jwt', jwt);
                    if (pageNameSignup === null) {
                        return;
                    }
                    else {
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

  editor.BlockManager.add('colorfulLogin', {
    label: 'Colorful Login & SignUp',
    media: '<img src="imgs/colorful.png" width ="50px" height="50px">',
    category: 'Auth Pages',
    content: { type: 'colorfulLogin' },
  });
};
