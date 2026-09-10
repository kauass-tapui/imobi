// Detectar preferência do sistema
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
const theme = saved || (prefersDark ? 'dark' : 'light');

// Aplicar tema ao carregar
document.documentElement.setAttribute('data-theme', theme);

// Função para trocar tema
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Atualizar ícone do botão
  updateThemeButton();
}

function updateThemeButton() {
  const btn = document.getElementById('theme-toggle');
  const current = document.documentElement.getAttribute('data-theme');
  
  if (btn) {
    btn.setAttribute('aria-label', 
      current === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'
    );
    btn.setAttribute('aria-pressed', current === 'dark');
  }
}

// Escutar mudanças de preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    updateThemeButton();
  }
});

// Exportar função
window.toggleTheme = toggleTheme;