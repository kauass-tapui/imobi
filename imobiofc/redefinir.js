const resetForm = document.querySelector('#reset-form');
const resetFeedback = document.querySelector('#feedback');

resetForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const { newPassword, confirmPassword } = resetForm.elements;
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,12}$/.test(newPassword.value);
  if (!resetForm.checkValidity()) { resetFeedback.textContent = 'Preencha os dois campos.'; resetForm.reportValidity(); return; }
  if (!validPassword) { resetFeedback.textContent = 'A senha deve ter de 8 a 12 caracteres, letra, número e símbolo.'; newPassword.focus(); return; }
  if (newPassword.value !== confirmPassword.value) { resetFeedback.textContent = 'As senhas não são iguais.'; confirmPassword.focus(); return; }
  resetFeedback.className = 'feedback success';
  resetFeedback.textContent = 'Senha redefinida com sucesso!';
});
