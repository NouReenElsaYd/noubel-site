let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvel = document.querySelector(".nouvel");
const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

window.onscroll = function () {
   let value = scrollY;
   let progress = scrollY / maxScroll;
   console.log(progress);
   moon.style.top = progress * window.innerHeight*3 + "px";
stars.style.left = progress * window.innerWidth *0.2 + "px";
mountains3.style.top = progress * window.innerHeight * 0.9 + "px";
mountains4.style.top = progress * window.innerHeight * 0.7 + "px";
river.style.top = progress * window.innerHeight * 0.5 + "px";
boat.style.top = progress * window.innerHeight * 0.5 + "px";
boat.style.left = progress * window.innerWidth * 0.3 + "px";
nouvel.style.fontSize = progress *600 + "px";

if(progress >= 0.13){
   nouvel.style.fontSize = 0.13 * 600 + "px";
   nouvel.style.position = "fixed";
   if(progress >=0.79){
          nouvel.style.display = "none";
  }else{
      nouvel.style.display = "block";
  }
  if(progress >=0.2){
    document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)";  
}else{
    document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)";
}
  
}
  
}
