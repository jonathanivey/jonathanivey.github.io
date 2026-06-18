(function () {
  var popup = null;

  function getPopup() {
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'click-tip-popup';
      popup.style.cssText =
        'display:none;position:fixed;background:#333;color:#fff;' +
        'padding:7px 13px;border-radius:6px;font-size:0.85rem;' +
        'z-index:9999;pointer-events:none;white-space:nowrap;max-width:280px;white-space:normal;';
      document.body.appendChild(popup);
    }
    return popup;
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('.click-tip');
    if (!el) {
      // click outside — hide popup
      var p = document.getElementById('click-tip-popup');
      if (p) p.style.display = 'none';
      return;
    }
    e.preventDefault();
    var tip = el.dataset.tip || '';
    if (!tip) return;
    var p = getPopup();
    p.textContent = tip;
    p.style.display = 'block';
    var rect = el.getBoundingClientRect();
    var top = rect.bottom + 6;
    var left = rect.left;
    p.style.top = top + 'px';
    p.style.left = left + 'px';
    // keep within viewport
    var vpw = window.innerWidth || document.documentElement.clientWidth;
    var vph = window.innerHeight || document.documentElement.clientHeight;
    if (left + p.offsetWidth > vpw - 8) {
      p.style.left = Math.max(8, vpw - p.offsetWidth - 8) + 'px';
    }
    if (top + p.offsetHeight > vph - 8) {
      p.style.top = Math.max(8, rect.top - p.offsetHeight - 6) + 'px';
    }
    clearTimeout(p._t);
    p._t = setTimeout(function () { p.style.display = 'none'; }, 4000);
  });
})();
