export function finishForm() {
  const inputLogin = document.createElement('input');
  inputLogin.setAttribute('type', 'text');
  inputLogin.setAttribute('name', 'login');

  const loginForm = document.querySelector('.login-form');
  loginForm.prepend(inputLogin);

  const inputPassword = document.querySelector('input[name="password"]');
  inputPassword.setAttribute('type', 'password');
}

// test data

finishForm();
