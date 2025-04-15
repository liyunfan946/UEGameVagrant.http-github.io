// ue5-api-scroll.js
// 虚幻5常用API滚动展示

const ue5ApiList = [
  { name: 'SpawnActor', usage: '在关卡中生成一个Actor\nUsage: GetWorld()->SpawnActor<AActor>(...)' },
  { name: 'GetWorld', usage: '获取当前世界对象\nUsage: UWorld* World = GetWorld();' },
  { name: 'AddDynamic', usage: '为委托添加动态绑定\nUsage: OnClicked.AddDynamic(this, &Class::Func);' },
  { name: 'FString', usage: 'UE字符串类型\nUsage: FString Str = TEXT("Hello");' },
  { name: 'UE_LOG', usage: '日志输出\nUsage: UE_LOG(LogTemp, Warning, TEXT("Hello: %d"), Value);' },
  { name: 'TArray', usage: '动态数组\nUsage: TArray<int32> Arr;' },
  { name: 'FindComponentByClass', usage: '查找组件\nUsage: FindComponentByClass<UStaticMeshComponent>()' },
  { name: 'BlueprintImplementableEvent', usage: '蓝图可实现事件\nUsage: UFUNCTION(BlueprintImplementableEvent)' },
  { name: 'Tick', usage: '每帧调用\nUsage: virtual void Tick(float DeltaTime) override;' },
  { name: 'GetActorLocation', usage: '获取Actor位置\nUsage: FVector Loc = GetActorLocation();' }
];

function renderUE5ApiScroller() {
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
