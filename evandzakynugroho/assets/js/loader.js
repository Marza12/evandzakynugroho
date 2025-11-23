
document.addEventListener("DOMContentLoaded", ()=>{
  const loader=document.getElementById("loader");
  const flash=document.getElementById("flash");
  const audio=new Audio("assets/sfx/shutter.mp3");

  setTimeout(()=> flash.classList.add("active"), 650);
  setTimeout(()=> audio.play(), 700);
  setTimeout(()=> flash.classList.remove("active"), 900);
  setTimeout(()=> loader.classList.add("hide"), 1300);
});
