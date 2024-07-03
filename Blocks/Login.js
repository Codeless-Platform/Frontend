login = (editor, opts = {}) => {
  editor.Components.addType('login-with-js', {
    model: {
      defaults: {
        tagName: 'section',
        components: `
  <div class="form_container">
    <form>
      <label for="email-field">Email:</label>
      <input id="email-field" class="email" type="email" required>
      <br>

      <label for="pass-field">Password:</label>
      <input id="pass-field" class="pass" type="password" required>
      <br>

      <input type="submit" value="Login" class="submitBtn">
    </form>
  </div>
   
      `,
        styles: `     section{
  background: linear-gradient(135deg, #1a1a1a, #333);
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
  background-color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
  color: #ccc;
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
  color: #ccc;
  background-color: #444;
}

input[type="email"]::placeholder,
input[type="password"]::placeholder {
  color: #888;
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
  .form_container {
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
  .form_container {
    padding: 10px;
  }

  input[type="email"],
  input[type="password"],
  input[type="submit"] {
    font-size: 12px;
    padding: 5px;
  }
}

`,
        script: ` 
        document.querySelector('.submitBtn').style.cursor = 'pointer';

    const login = document.querySelector('section');
    const form =document.querySelector('form');

    form.addEventListener('submit', function (e) {
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
      const pageName = login.getAttribute('pageName');

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
          const jwt=data.jwt;
          sessionStorage.setItem('jwt', jwt);
          if(pageName===null){
          return;
          }else{
            window.location.href = pageName + ".html";
          }
        })
        .catch((error) => {
          document.querySelector('.email').value = '';
          document.querySelector('.pass').value = '';
          alert(error);
        });
    });

`,
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
    label: 'Dark Login',
    media: '<img src="../imgs/login.png" height="50px" width="50px" />',
    category: 'Auth Pages',
    content: { type: 'login-with-js' },
  });
};
