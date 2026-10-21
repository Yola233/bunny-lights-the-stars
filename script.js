(function(){
  const btn=document.getElementById('menuBtn'),links=document.getElementById('navLinks');
  function close(){links.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  btn.addEventListener('click',()=>{const open=links.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();btn.focus();}});
})();
