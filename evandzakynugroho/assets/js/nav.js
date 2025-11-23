document.addEventListener('DOMContentLoaded', function(){
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileClose');
  function openMenu(){ mobileMenu.classList.add('open'); document.body.style.overflow='hidden'; }
  function closeMenu(){ mobileMenu.classList.remove('open'); document.body.style.overflow=''; }
  if(hamburger) hamburger.addEventListener('click', openMenu);
  if(closeBtn) closeBtn.addEventListener('click', closeMenu);
  // close when clicking a link
  mobileMenu.querySelectorAll && mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));
});
