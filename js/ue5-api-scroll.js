document.addEventListener('DOMContentLoaded', function() {
  // 初始化弹幕
  setTimeout(startUE5ApiBarrage, 500);

  // 初始化滚动列表
  setTimeout(startUE5ApiScroll, 500);
});

function startUE5ApiBarrage() {
  const barrage = document.getElementById('ue5-api-barrage');
  if (!barrage) return;

  const items = barrage.querySelectorAll('.ue5-api-barrage-item');
  const screenWidth = window.innerWidth;

  items.forEach((item, idx) => {
      const top = 10 + idx * 32;
      item.style.top = `${top}px`;
      item.style.left = `${screenWidth}px`;

      const speed = 1 + Math.random() * 1.5;
      let left = screenWidth;

      function move() {
          left -= speed;
          if (left < -item.offsetWidth) {
              left = screenWidth;
          }
          item.style.left = `${left}px`;
          item._barrageTimer = requestAnimationFrame(move);
      }

      move();
  });
}

function startUE5ApiScroll() {
  const list = document.querySelector('.ue5-api-list');
  if (!list) return;

  let scrollTop = 0;

  function scrollList() {
      scrollTop += 1;
      const maxScrollTop = list.scrollHeight - list.clientHeight;

      if (scrollTop >= maxScrollTop) {
          scrollTop = 0;
      }

      list.scrollTop = scrollTop;
      requestAnimationFrame(scrollList);
  }

  scrollList();
}