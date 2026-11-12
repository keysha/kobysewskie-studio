  (function () {
    var saved = null;
    try { saved = localStorage.getItem('ui'); } catch (e) {}
    var ui = saved || ((navigator.language || 'en').toLowerCase().indexOf('pl') === 0 ? 'pl' : 'en');
    function set(l) {
      document.documentElement.setAttribute('data-ui', l); document.documentElement.lang = l;
      try { localStorage.setItem('ui', l); } catch (e) {}
      document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-set') === l); });
    }
    document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { set(b.getAttribute('data-set')); }); });
    set(ui);
  })();
