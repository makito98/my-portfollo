const img_scr = [
  "img/university1.jpg",
  "img/university2.jpg",
  "img/university3.jpg",
  "img/university4.jpg",
];
let num = -1;

function slideshow_timer() {
  if (num === 3) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("myuniversity").src = img_scr[num];
}

setInterval(slideshow_timer, 1000);
