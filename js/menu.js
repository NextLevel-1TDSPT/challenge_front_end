/* ==========================================================
   NextLevel – Menu hambúrguer (Sprint 02)
   Abre e fecha o menu principal em telas menores (celular e tablet).
   ========================================================== */

const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");

/* Se o menu está fechado, abre; se está aberto, fecha */
function toggleMenu() {
  menuPrincipal.classList.toggle("menu-aberto");
}

/* Ao clicar no botão hambúrguer, chama a função */
botaoMenu.addEventListener("click", toggleMenu);
