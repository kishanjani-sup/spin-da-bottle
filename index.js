
$(".btn").click(function(){
  var i = Math.floor(Math.random()*360) + 720;
  $(".bottle").css("transform","rotate("+i+"deg)");
});
