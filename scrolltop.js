window.onload = function(){
  var obtn = document.getElementById("scrollTopbtn");
  var clientHeight = document.documentElement.clientHeight;
  window.onscroll = function(){
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(osTop>= clientHeight){
      obtn.style.display = "block";
    }else{
      obtn.style.display = "none";
    }
  }
  obtn.onclick = function(){
    timer = setInterval(function(){
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      var ispeed = Math.floor(-osTop / 5);
      document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
      if(osTop == 0){ 
        clearInterval(timer); 
      }
    },30);
  }
}
