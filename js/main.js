(function () {
  // Mobile nav
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('mobileNav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Roof scan demo
  var scanBtn = document.getElementById('scanBtn');
  var roofSvg = document.getElementById('roofSvg');
  var scanLine = document.getElementById('scanLine');
  var estResult = document.getElementById('estResult');
  var roofStatus = document.getElementById('roofStatus');
  var facetLeft = document.getElementById('facetLeft');
  var facetRight = document.getElementById('facetRight');

  if (scanBtn && roofSvg) {
    scanBtn.addEventListener('click', function () {
      scanBtn.disabled = true;
      scanBtn.textContent = 'Scanning…';
      if (roofStatus) roofStatus.textContent = 'Detecting facets & pitch…';
      if (scanLine) {
        scanLine.classList.remove('running');
        void scanLine.offsetWidth;
        scanLine.classList.add('running');
      }
      setTimeout(function () {
        if (facetLeft) facetLeft.classList.add('active');
      }, 400);
      setTimeout(function () {
        if (facetRight) facetRight.classList.add('active');
      }, 700);
      setTimeout(function () {
        roofSvg.classList.add('measured');
        // show dim texts
        var dims = roofSvg.querySelectorAll('text.measure-line');
        dims.forEach(function (t) { t.style.opacity = '1'; });
        if (roofStatus) roofStatus.textContent = 'Measurement complete · 28.4 squares · 6/12';
        if (estResult) estResult.style.display = 'block';
        scanBtn.disabled = false;
        scanBtn.textContent = 'Re-scan roof →';
      }, 1600);
    });
  }

  // Rehash timeline animation
  var playBtn = document.getElementById('playTimeline');
  var steps = document.querySelectorAll('#rehashTimeline .timeline-step');
  if (playBtn && steps.length) {
    playBtn.addEventListener('click', function () {
      playBtn.disabled = true;
      steps.forEach(function (s) {
        s.classList.remove('visible', 'active');
      });
      var i = 0;
      function next() {
        if (i > 0) steps[i - 1].classList.remove('active');
        if (i >= steps.length) {
          playBtn.disabled = false;
          playBtn.textContent = '▶ Replay rehash story';
          return;
        }
        steps[i].classList.add('visible', 'active');
        i++;
        setTimeout(next, 900);
      }
      next();
    });
  }
})();
