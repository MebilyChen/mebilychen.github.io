var a_idx = 0;
//var a = new Array("🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","🤍","🖤","陛下他🤍超可爱");
//var a = new Array("1","22","333","4444","55555");//测试 怀疑和pjax有关系
//var a = new Array("❄");
var a = new Array("。");
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 25,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#CDCDCD"
    });
    $("body").append($i);
    $i.animate({
      "top": y + 180,
      "opacity": 0
    }, 1800, function() {
    $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});