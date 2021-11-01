document.querySelector(".gos").addEventListener("click",function(){
    var numberRandom = Math.floor(Math.random() * 6) + 1;
    var image = "images/dice" + numberRandom + ".png"
    document.querySelector(".dice .imag").setAttribute("src", image);
  })