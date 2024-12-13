// Selecionar elementos do modal
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close");

// Mostrar o modal no botão Login
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

// Fechar o modal no botão 'X'
closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Fechar o modal fora dele
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// Selecionar elementos do modalreg
const regBtn = document.getElementById("regBtn");
const regModal = document.getElementById("regModal");

// Mostrar o modal no botão Login
regBtn.addEventListener("click", () => {
  regModal.style.display = "block";
});

// Fechar o modal no botão 'X'
closeModal.addEventListener("click", () => {
  regModal.style.display = "none";
});

// Fechar o modal fora dele
window.addEventListener("click", (event) => {
  if (event.target === regModal) {
    regModal.style.display = "none";
  }
});