document.addEventListener('DOMContentLoaded', () => {
  const btnWelcome = document.getElementById('btn-welcome');
  const welcomeMessage = document.getElementById('welcome-message');

  // Quando o botão for clicado, mostra a mensagem
  btnWelcome.addEventListener('click', () => {
    welcomeMessage.textContent = "Bem-vindo ao Restaurante Seu Lugar! Estamos felizes em ter você aqui.";
    welcomeMessage.style.color = "green";  // Estilo dinâmico
  });
});
