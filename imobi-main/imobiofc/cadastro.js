const form = document.querySelector('#register-form');
const phone = document.querySelector('#phone');
const feedback = document.querySelector('#feedback');

phone.addEventListener('input', () => {
  const digits = phone.value.replace(/\D/g, '').slice(0, 13);
  let value = digits ? `+${digits.slice(0, 2)}` : '';
  if (digits.length > 2) value += ` (${digits.slice(2, 4)}`;
  if (digits.length >= 4) value += ') ';
  if (digits.length > 4) value += digits.slice(4, 9);
  if (digits.length > 9) value += `-${digits.slice(9, 13)}`;
  phone.value = value;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,12}$/.test(form.elements.password.value);
  if (!form.checkValidity()) { feedback.textContent = 'Preencha todos os campos corretamente.'; form.reportValidity(); return; }
  if (!validPassword) { feedback.textContent = 'A senha precisa ter de 8 a 12 caracteres, letra, número e símbolo.'; form.elements.password.focus(); return; }
  feedback.className = 'feedback success';
  feedback.textContent = 'Cadastro realizado com sucesso!';
});
