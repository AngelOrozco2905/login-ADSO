const View = {
  container: document.getElementById('container'),
  registerBtn: document.getElementById('register-btn'),
  loginBtn: document.getElementById('login-btn'),

  init() {
    this.registerBtn.addEventListener('click', () => {
      this.container.classList.add('active');
    });

    this.loginBtn.addEventListener('click', () => {
      this.container.classList.remove('active');
    });
  },

  showMessage(message) {
    alert(message);
  }
};

View.init();