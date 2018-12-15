let img = document.querySelector('img');
let num = 0;
let imgs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"]


let loop = setInterval(function () {
  img.src = imgs[num];
  num++;
  if (num === imgs.length) {
    num = 0;
  }
}, 2000);