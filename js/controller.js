const Controller = {
  init() {
    document.getElementById('signup-form').addEventListener('submit', this.handleSignUp);
    document.getElementById('login-form').addEventListener('submit', this.handleSignIn);
  },

  handleSignUp(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    Model.saveUser({ name, email, password });
    View.showMessage('¡Usuario registrado con éxito!');
    document.getElementById('signup-form').reset();
  },

  handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = Model.validateCredentials(email, password);
    if (user) {
      View.showMessage(`¡Bienvenido de nuevo, ${user.name}!`);
    } else {
      View.showMessage('Correo o contraseña incorrectos.');
    }
  }
};

Controller.init();