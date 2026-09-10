const form = document.querySelector('#login-form');
const feedback = document.querySelector('#feedback');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    feedback.className = 'feedback';
    feedback.textContent = 'Preencha todos os campos corretamente.';
    form.reportValidity();
    return;
  }
  feedback.className = 'feedback success';
  feedback.textContent = 'Acesso validado. Bem-vindo(a) de volta!';
});
