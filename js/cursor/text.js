var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("陛下万岁！", "今天也要开心呀", "加油","🤍","🖤","一定要把@memo完结掉！");
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#CDCDCD"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 150,
      "opacity": 0
    }, 1000, function() {
    $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});