

var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    
  var i=0 ;

    if(i==0){
    var a = new Array("陛下万岁！");
  }
    if(i==1){
    var a = new Array("🤍");
    }
    if(i==2){
      var a = new Array("🖤");
      }
    if(i==3){
        var a = new Array("一定要把@memo完结掉！");
        }
    i++;
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
    }, 1800, function() {
    $i.remove();
    });
    
  });
});