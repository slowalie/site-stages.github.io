function toggleMenu() {
  const menu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");
  
  // On ajoute ou retire la classe 'active'
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}