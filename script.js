(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const target = a.getAttribute('href');
    if ((path === '' && target === 'index.html') || path === target) {
      a.classList.add('active');
    }
  });
})();
