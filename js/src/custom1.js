var OriginTitile = document.title;
  
  window.onload = function() {

    /* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
    
    var titleTime;
    document.addEventListener('visibilitychange', function() {
        if(document.hidden) {
            $('[rel="icon"]').attr('href', "/images/favicon-32x32-king-black.png");
            $('[rel="shortcut icon"]').attr('href', "/images/favicon-32x32-king-black.png");
            document.title = '盯————';
            clearTimeout(titleTime);
          } else {
            $('[rel="icon"]').attr('href', "/images/favicon-32x32-brand-black.png");
            $('[rel="shortcut icon"]').attr('href', "/images/favicon-32x32-brand-black.png");
            document.title = '*偏转视线*';
            titleTime = setTimeout(function() {
              document.title = '碳素的小作坊';
            }, 1000);
          }
    });

    console.log('tag cloud plugin rock and roll!');
    document.getElementById('myCanvasContainer').style.display = 'inline';
    try {
      TagCanvas.textFont = 'Helvetica';
      TagCanvas.textColour = '#222222';
      TagCanvas.textHeight = 26;
      TagCanvas.outlineColour = '#FFFFFF';
      TagCanvas.maxSpeed = 0.05;
      TagCanvas.freezeActive = false;
      TagCanvas.outlineMethod = 'block';
      TagCanvas.minBrightness = 0.2;
      TagCanvas.depth = 0.92;
      TagCanvas.pulsateTo = 0.6;
      TagCanvas.initial = [0.1, -0.1];
      TagCanvas.decel = 0.98;
      TagCanvas.reverse = true;
      TagCanvas.hideTags = false;
      TagCanvas.shadow = '#ccf';
      TagCanvas.shadowBlur = 3;
      TagCanvas.weight = false;
      TagCanvas.imageScale = null;
      TagCanvas.fadeIn = 1000;
      TagCanvas.width=1280;
      TagCanvas.height=1024;
      TagCanvas.clickToFront = 600;
      TagCanvas.lock = false;
      TagCanvas.Start('resCanvas');
      TagCanvas.tc['resCanvas'].Wheel(true)
    } catch (e) {
      console.log(e);
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
   
  };