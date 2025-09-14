
(function(){
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a=>{
    const target = a.getAttribute('href').toLowerCase();
    if ((page === '' && target === 'index.html') || page === target) {
      a.classList.add('active');
      a.setAttribute('aria-current','page');
    }
  });
})();

