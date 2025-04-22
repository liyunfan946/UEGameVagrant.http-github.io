// Live2D 看板娘初始化脚本
// 使用 https://github.com/xiazeyu/live2d-widget.js
// 你可以更换模型和参数

// 加载 live2d-widget.js
(function() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
  script.async = true;
  script.onload = function() {
    L2Dwidget.init({
      model: {
        // 你可以更换模型，参考 https://github.com/xiazeyu/live2d-widget.js#%E6%A8%A1%E5%9E%8B%E5%88%97%E8%A1%A8
        jsonPath: 'https://cdn.jsdelivr.net/npm/live2d-widget-model-epsilon2_1@1.0.5/assets/Epsilon2.1.model.json',
      },
      display: {
        position: 'right',
        width: 160,
        height: 300,
        hOffset: 0,
        vOffset: -20
      },
      mobile: {
        show: true,
        scale: 0.5
      },
      react: {
        opacityDefault: 0.9,
        opacityOnHover: 1
      }
    });
  };
  document.body.appendChild(script);
})();
