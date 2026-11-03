/* Menu hambúrguer */

const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");

function toggleMenu() {
  menuPrincipal.classList.toggle("menu-aberto");
}

botaoMenu.addEventListener("click", toggleMenu);
