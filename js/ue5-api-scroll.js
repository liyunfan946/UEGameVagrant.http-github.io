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
  const container = document.getElementById('ue5-api-scroller');
  if (!container) return;
  let html = '<div class="ue5-api-list">';
  ue5ApiList.forEach(api => {
    html += `<div class="ue5-api-item"><b>${api.name}</b><br><span>${api.usage.replace(/\\n/g,'<br>')}</span></div>`;
  });
  html += '</div>';
  container.innerHTML = html;
}

function startUE5ApiScroll() {
  const list = document.querySelector('.ue5-api-list');
  if (!list) return;
  let scrollTop = 0;
  setInterval(() => {
    scrollTop += 1;
    list.scrollTop = scrollTop;
    if (scrollTop >= list.scrollHeight - list.clientHeight) {
      scrollTop = 0;
    }
  }, 60);
}

document.addEventListener('DOMContentLoaded', function() {
  renderUE5ApiScroller();
  setTimeout(startUE5ApiScroll, 500);
});
