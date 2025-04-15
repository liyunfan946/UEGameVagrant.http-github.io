// ue5-api-scroll.js
// 留言弹幕功能

let barrageMessages = [];

function renderBarrage() {
  // 防止重复渲染
  if (document.getElementById('ue5-msg-barrage')) return;
  // 弹幕容器
  let barrage = document.createElement('div');
  barrage.id = 'ue5-msg-barrage';
  barrage.style.display = 'none';
  document.body.appendChild(barrage);
  // 留言输入框
  let inputWrap = document.createElement('div');
  inputWrap.id = 'ue5-msg-barrage-input-wrap';
  inputWrap.innerHTML = '<input id="ue5-msg-barrage-input" type="text" maxlength="50" placeholder="输入留言弹幕..." /><button id="ue5-msg-barrage-send">发送</button>';
  document.body.appendChild(inputWrap);
  // 右下角按钮
  let toggleBtn = document.createElement('div');
  toggleBtn.id = 'ue5-msg-barrage-toggle';
  toggleBtn.innerHTML = '留言弹幕';
  document.body.appendChild(toggleBtn);
  let barrageVisible = false;
  let started = false;
  toggleBtn.onclick = function() {
    barrageVisible = !barrageVisible;
    barrage.style.display = barrageVisible ? 'block' : 'none';
    inputWrap.style.display = barrageVisible ? 'block' : 'none';
  };
  // 发送按钮
  document.getElementById('ue5-msg-barrage-send').onclick = function() {
    const input = document.getElementById('ue5-msg-barrage-input');
    const msg = input.value.trim();
    if (msg) {
      barrageMessages.push(msg);
      showMsgBarrage(msg);
      input.value = '';
    }
  };
}

function showMsgBarrage(msg) {
  const barrage = document.getElementById('ue5-msg-barrage');
  if (!barrage) return;
  let item = document.createElement('div');
  item.className = 'ue5-msg-barrage-item';
  item.innerText = msg;
  let top = 10 + Math.random() * 100;
  item.style.top = top + 'px';
  let left = window.innerWidth;
  item.style.left = left + 'px';
  let speed = 1 + Math.random()*1.5;
  barrage.appendChild(item);
  function move() {
    left -= speed;
    if (left < -item.offsetWidth) {
      barrage.removeChild(item);
      return;
    }
    item.style.left = left + 'px';
    item._barrageTimer = requestAnimationFrame(move);
  }
  move();
}

document.addEventListener('DOMContentLoaded', function() {
  renderBarrage();
});
  // 防止重复渲染
  if (document.getElementById('ue5-api-barrage')) return;
  let barrage = document.createElement('div');
  barrage.id = 'ue5-api-barrage';
  barrage.style.display = 'none'; // 默认隐藏
  document.body.appendChild(barrage);
  // 添加右下角按钮
  let toggleBtn = document.createElement('div');
  toggleBtn.id = 'ue5-api-barrage-toggle';
  toggleBtn.innerHTML = 'API弹幕';
  document.body.appendChild(toggleBtn);
  let barrageVisible = false;
  let started = false;
  toggleBtn.onclick = function() {
    barrageVisible = !barrageVisible;
    barrage.style.display = barrageVisible ? 'block' : 'none';
    if (barrageVisible && !started) {
      startUE5ApiBarrage();
      started = true;
    }
  };
}

function startUE5ApiBarrage() {
  const barrage = document.getElementById('ue5-api-barrage');
  if (!barrage) return;
  barrage.innerHTML = '';
  const screenWidth = window.innerWidth;
  ue5ApiList.forEach((api, idx) => {
    let item = document.createElement('div');
    item.className = 'ue5-api-barrage-item';
    item.innerHTML = `<b>${api.name}</b>：<span>${api.usage}</span>`;
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
  renderUE5ApiScroller();
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
  renderUE5ApiScroller();
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
  renderUE5ApiScroller();
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
  renderUE5ApiScroller();
  setTimeout(startUE5ApiScroll, 500);
});
