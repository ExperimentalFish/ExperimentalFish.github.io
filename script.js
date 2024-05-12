$(".container").mousemove(function(e){
  var cursorXpos = e.pageX; 
  var cursorYpos = e.pageY; 
  var xposToString = String(cursorXpos);
  
  var lastDigit = (xposToString.slice(-1));
  

  $(".cursor").addClass("moving").css({"transform" : "translate("+ cursorXpos+"px ,"+cursorYpos+"px)" });
  

  
});

$("body").mousedown(function(){
  $(".cursor").addClass("clicked");
});
$("body").mouseup(function(){
  $(".cursor").removeClass("clicked");
});
