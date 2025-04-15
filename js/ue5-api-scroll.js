// ue5-api-scroll.js
// 留言弹幕和API弹幕功能已移除
    let top = 10 + idx * 32;
    item.style.top = top + 'px';
    let left = screenWidth + Math.random()*200;
    item.style.left = left + 'px';
    let speed = 1 + Math.random()*1.5;
    function move() {
      left -= speed;
      if (left < -item.offsetWidth) {
        left = screenWidth + Math.random()*200;
      }
      item.style.left = left + 'px';
      item._barrageTimer = requestAnimationFrame(move);
    }
    barrage.appendChild(item);
    move();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // renderUE5ApiScroller(); // 函数未定义，已注释
});

function startUE5ApiBarrage() {
  const barrage = document.getElementById('ue5-api-barrage');
  if (!barrage) return;
  const items = barrage.querySelectorAll('.ue5-api-barrage-item');
  const screenWidth = window.innerWidth;
  items.forEach((item, idx) => {
    let left = screenWidth;
    item.style.left = left + 'px';
    item.style.top = (10 + idx * 32) + 'px';
    let speed = 1 + Math.random()*1.5;
    function move() {
      left -= speed;
      if (left < -item.offsetWidth) {
        left = screenWidth;
      }
      item.style.left = left + 'px';
      item._barrageTimer = requestAnimationFrame(move);
    }
    move();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // renderUE5ApiScroller(); // 函数未定义，已注释
  setTimeout(startUE5ApiBarrage, 500);
});

function startUE5ApiBarrage() {
  const barrage = document.getElementById('ue5-api-barrage');
  if (!barrage) return;
  const items = barrage.querySelectorAll('.ue5-api-barrage-item');
  const screenWidth = window.innerWidth;
  items.forEach((item, idx) => {
    let left = screenWidth;
    item.style.left = left + 'px';
    item.style.top = (10 + idx * 32) + 'px';
    let speed = 1 + Math.random()*1.5;
    function move() {
      left -= speed;
      if (left < -item.offsetWidth) {
        left = screenWidth;
      }
      item.style.left = left + 'px';
      item._barrageTimer = requestAnimationFrame(move);
    }
    move();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // renderUE5ApiScroller(); // 函数未定义，已注释
  setTimeout(startUE5ApiBarrage, 500);
});

function startUE5ApiScroll() {
  const list = document.querySelector('.ue5-api-list');
  if (!list) return;
  let scrollTop = 0;
  setInterval(() => {
    // 只滚动内部列表，不影响主页面
    scrollTop += 1;
    if (scrollTop >= list.scrollHeight - list.clientHeight) {
      scrollTop = 0;
    }
    list.scrollTop = scrollTop;
  }, 60);
}

document.addEventListener('DOMContentLoaded', function() {
  // renderUE5ApiScroller(); // 函数未定义，已注释
  setTimeout(startUE5ApiScroll, 500);
});
