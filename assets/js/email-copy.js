(function () {
  var btn = document.getElementById('emailCopyBtn');
  var popup = document.getElementById('email-popup');
  if (!btn || !popup) return;

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var email = decodeURIComponent(btn.dataset.eu) + '@' + decodeURIComponent(btn.dataset.ed);

    function show() {
      showPopup(btn, popup, email + ' — copied!');
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(show).catch(function () {
        fallbackCopy(email);
        show();
      });
    } else {
      fallbackCopy(email);
      show();
    }
  });

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(ta);
  }

  function showPopup(anchor, el, text) {
    el.textContent = text;
    el.style.display = 'block';
    var rect = anchor.getBoundingClientRect();
    el.style.top = (rect.bottom + 8) + 'px';
    el.style.left = rect.left + 'px';
    var vpw = window.innerWidth || document.documentElement.clientWidth;
    if (rect.left + el.offsetWidth > vpw - 8) {
      el.style.left = Math.max(8, vpw - el.offsetWidth - 8) + 'px';
    }
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.style.display = 'none'; }, 3000);
  }
})();
