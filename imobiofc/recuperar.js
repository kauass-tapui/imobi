const codeInputs = [...document.querySelectorAll('.code-inputs input')];
const resendLink = document.querySelector('#resend-link');
const recoveryMessage = document.querySelector('#recovery-message');
const correctCode = '123456';

function checkCode() {
  const code = codeInputs.map((field) => field.value).join('');
  if (code.length !== 6) return;
  if (code === correctCode) window.location.href = 'redefinir.html';
  else {
    recoveryMessage.textContent = 'Código inválido. Tente novamente.';
    codeInputs.forEach((field) => { field.value = ''; });
    codeInputs[0].focus();
  }
}

resendLink.addEventListener('click', (event) => {
  event.preventDefault();
  recoveryMessage.textContent = 'Um novo código foi enviado para o seu e-mail.';
});

codeInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
    if (input.value && index < codeInputs.length - 1) codeInputs[index + 1].focus();
    checkCode();
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && !input.value && index > 0) codeInputs[index - 1].focus();
  });
  input.addEventListener('paste', (event) => {
    event.preventDefault();
    const digits = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    digits.split('').forEach((digit, place) => { if (codeInputs[index + place]) codeInputs[index + place].value = digit; });
    codeInputs[Math.min(index + digits.length, 5)].focus();
    checkCode();
  });
});
