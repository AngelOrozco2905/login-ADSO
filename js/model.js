const Model = {
  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  },
  
  saveUser(user) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  },

  validateCredentials(email, password) {
    const users = this.getUsers();
    return users.find(u => u.email === email && u.password === password);
  }
};