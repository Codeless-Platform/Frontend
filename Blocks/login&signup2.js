login_signup2 = (editor, opts = {}) => {
  const script1 = function () {
    const loginForm = document.querySelector('#login');

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

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
      const pageNameLogin = loginForm.getAttribute('pageName-login');

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
          window.location.href = `${pageNameLogin}.html`;
        })
        .catch((error) => {
          document.querySelector('.loginEmail').value = '';
          document.querySelector('.loginPass').value = '';
          alert(error);
        });
    });

    const name_input = document.querySelector('.signupName');
    const email_input = document.querySelector('.signupEmail');
    const pass_input = document.querySelector('.signupPass');
    const signupForm = document.querySelector('#signup');

    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const apiLink = 'http://localhost:1337/api/auth/local/register';
      const pageNameSignup = signupForm.getAttribute('pageName-signup');

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
          window.location.href = `${pageNameSignup}.html`;
        })
        .catch((error) => {
          document.querySelector('.signupName').value = '';
          document.querySelector('.signupPass').value = '';
          document.querySelector('.signupEmail').value = '';

          alert(error);
        });
    });
  };
  editor.Components.addType('login_signup2', {
    model: {
      defaults: {
        tagName: 'section',
        components: `
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" />
                <div class="section_container">
                    <input type="checkbox" id="flip">
                            <img class="front cover" src="https://via.placeholder.com/425x451" alt="">
                            <img class="backImg back cover" src="https://via.placeholder.com/425x451" alt="">
                    <div class="forms">
                        <div class="form-content">
                            <div class="login-form">
                                <div class="title">Login</div>
                                <form id="login">
                                    <div class="input-boxes">
                                        <div class="input-box">
                                            <i class="fas fa-envelope"></i>
                                            <input type="email" placeholder="Enter your email" required class="loginEmail">
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" required class="loginPass">
                                        </div>
                                        <div class="text"><a href="#">Forgot password?</a></div>
                                        <div class="button input-box">
                                            <input type="submit" value="Sumbit">
                                        </div>
                                        <div class="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
                                    </div>
                                </form>
                            </div>
                            <div class="signup-form">
                                <div class="title">Signup</div>
                                <form id="signup">
                                    <div class="input-boxes">
                                        <div class="input-box">
                                            <i class="fas fa-user"></i>
                                            <input type="text" class="signupName" placeholder="Enter your name" required>
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-envelope"></i>
                                            <input type="email" class="signupEmail" placeholder="Enter your email" required>
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-lock"></i>
                                            <input type="password" class="signupPass" minlength="6" placeholder="Enter your password" required>
                                        </div>
                                        <div class="button input-box">
                                            <input type="submit" value="Sumbit">
                                        </div>
                                        <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
                       
                        section{
                        height:100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #7d2ae8;
                        }
                    .section_container{
                        background: #fff;
                        padding: 40px 30px;
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
                        perspective: 2700px;
                    }
                    
                    .section_container .cover {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        height: 100%;
                        width: 50%;
                        z-index: 98;
                        transition: all 1s ease;
                        transform-origin: left;
                        transform-style: preserve-3d;
                    }
                    
                    .section_container #flip:checked~.cover {
                        transform: rotateY(-180deg);
                    }
                    
                    .section_container .cover .front,
                    .section_container .cover .back {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                    }
                    
                    .cover .back {
                        transform: rotateY(180deg);
                        backface-visibility: hidden;
                    }
                    
                    .section_container .cover::before,
                    .section_container .cover::after {
                        content: '';
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        background: #7d2ae8;
                        opacity: 0.5;
                        z-index: 12;
                    }
                    
                    .section_container .cover::after {
                        opacity: 0.3;
                        transform: rotateY(180deg);
                        backface-visibility: hidden;
                    }
                    
                    .section_container .cover img {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        z-index: 10;
                    }
                    
                    .section_container .cover .text {
                        position: absolute;
                        z-index: 130;
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .cover .text .text-1,
                    .cover .text .text-2 {
                        font-size: 26px;
                        font-weight: 600;
                        color: #fff;
                        text-align: center;
                    }
                    
                    .cover .text .text-2 {
                        font-size: 15px;
                        font-weight: 500;
                    }
                    
                    .section_container .forms {
                        height: 100%;
                        width: 100%;
                        background: #fff;
                    }
                    
                    .section_container .form-content {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    
                    .form-content .login-form,
                    .form-content .signup-form {
                        width: calc(100% / 2 - 25px);
                    }
                    
                    .forms .form-content .title {
                        position: relative;
                        font-size: 24px;
                        font-weight: 500;
                        color: #333;
                    }
                    
                    .forms .form-content .title:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        height: 3px;
                        width: 25px;
                        background: #7d2ae8;
                    }
                    
                    .forms .signup-form .title:before {
                        width: 20px;
                    }
                    
                    .forms .form-content .input-boxes {
                        margin-top: 30px;
                    }
                    
                    .forms .form-content .input-box {
                        display: flex;
                        align-items: center;
                        height: 50px;
                        width: 100%;
                        margin: 10px 0;
                        position: relative;
                    }
                    
                    .form-content .input-box input {
                        height: 100%;
                        width: 100%;
                        outline: none;
                        border: none;
                        padding: 0 30px;
                        font-size: 16px;
                        font-weight: 500;
                        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
                        transition: all 0.3s ease;
                    }
                    
                    .form-content .input-box input:focus,
                    .form-content .input-box input:valid {
                        border-color: #7d2ae8;
                    }
                    
                    .form-content .input-box i {
                        position: absolute;
                        color: #7d2ae8;
                        font-size: 17px;
                    }
                    
                    .forms .form-content .text {
                        font-size: 14px;
                        font-weight: 500;
                        color: #333;
                    }
                    
                    .forms .form-content .text a {
                        text-decoration: none;
                    }
                    
                    .forms .form-content .text a:hover {
                        text-decoration: underline;
                    }
                    
                    .forms .form-content .button {
                        color: #fff;
                        margin-top: 40px;
                    }
                    
                    .forms .form-content .button input {
                        color: #fff;
                        background: #7d2ae8;
                        border-radius: 6px;
                        padding: 0;
                        cursor: pointer;
                        transition: all 0.4s ease;
                    }
                    
                    .forms .form-content .button input:hover {
                        background: #5b13b9;
                    }
                    
                    .forms .form-content label {
                        color: #5b13b9;
                        cursor: pointer;
                    }
                    
                    .forms .form-content label:hover {
                        text-decoration: underline;
                    }
                    
                    .forms .form-content .login-text,
                    .forms .form-content .sign-up-text {
                        text-align: center;
                        margin-top: 25px;
                    }
                    
                    .section_container #flip {
                        display: none;
                    }
                    
                    @media (max-width: 730px) {
                        .section_container .cover {
                            display: none;
                        }
                        .form-content .login-form,
                        .form-content .signup-form {
                            width: 100%;
                        }
                        .form-content .signup-form {
                            display: none;
                        }
                        .section_container #flip:checked~.forms .signup-form {
                            display: block;
                        }
                        .section_container #flip:checked~.forms .login-form {
                            display: none;
                        }
                    }
                `,
        script: script1, // Pass editor as a parameter using bind
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

  editor.BlockManager.add('login_signup2', {
    label: 'login_signup',
    media: '<img src="imgs/login_signup2.png" width ="50px" height="50px">',
    category: 'Auth Pages',
    content: { type: 'login_signup2' },
  });
};
