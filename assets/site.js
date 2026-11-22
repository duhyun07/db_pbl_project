// D-day, 일정 하이라이트, 체크리스트 저장 (브라우저별로 저장됨)
(function () {
  function todayKST() {
    var now = new Date();
    var kst = new Date(now.getTime() + (now.getTimezoneOffset() + 540) * 60000);
    return new Date(kst.getFullYear(), kst.getMonth(), kst.getDate());
  }

  // D-day 배지
  var dday = document.querySelector('[data-dday]');
  if (dday) {
    var t = todayKST();
    var d = new Date(2026, 11, 2);
    var diff = Math.round((d - t) / 86400000);
    dday.textContent = diff > 0 ? 'D-' + diff : diff === 0 ? 'D-DAY' : '발표 완료';
  }

  // 일정: 지난 날 / 오늘 이후 첫 마감 표시
  var items = document.querySelectorAll('.milestone[data-date]');
  if (items.length) {
    var today = todayKST();
    var marked = false;
    items.forEach(function (el) {
      var p = el.dataset.date.split('-');
      var day = new Date(+p[0], +p[1] - 1, +p[2]);
      if (day < today) {
        el.classList.add('done');
      } else if (!marked) {
        el.classList.add('now');
        marked = true;
      }
    });
  }

  // 체크리스트: localStorage에 저장 (안 되는 환경이면 그냥 무시)
  document.querySelectorAll('.checklist[data-key]').forEach(function (list) {
    var key = 'vuln-mgmt:' + list.dataset.key;
    var boxes = list.querySelectorAll('input[type=checkbox]');
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { saved = {}; }

    var progress = list.parentNode.querySelector('.progress');
    function update() {
      var done = 0;
      boxes.forEach(function (b) { if (b.checked) done++; });
      if (progress) progress.textContent = done + ' / ' + boxes.length + ' 완료';
    }

    boxes.forEach(function (box, i) {
      box.checked = !!saved[i];
      box.addEventListener('change', function () {
        saved[i] = box.checked;
        try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) { /* 저장 불가 */ }
        update();
      });
    });
    update();
  });

}());
