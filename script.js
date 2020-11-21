const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;
function turnFrontOne() {
  if(width <= 768)
  {
    let front = document.getElementById("front1");
    let back = document.getElementById("back1");
    front.style.webkitTransform = 'rotateY('+ -180 +'deg)';
    front.style.mozTransform    = 'rotateY('+ -180 +'deg)';
    front.style.msTransform     = 'rotateY('+ -180 +'deg)';
    front.style.oTransform      = 'rotateY('+ -180 +'deg)';
    front.style.transform       = 'rotateY('+ -180 +'deg)';
    back.style.webkitTransform = 'rotateY('+ 0 +'deg)';
    back.style.mozTransform    = 'rotateY('+ 0 +'deg)';
    back.style.msTransform     = 'rotateY('+ 0 +'deg)';
    back.style.oTransform      = 'rotateY('+ 0 +'deg)';
    back.style.transform       = 'rotateY('+ 0 +'deg)';
  }
}
function turnFrontTwo() {
  if(width <= 768)
  {
    let front = document.getElementById("front2");
    let back = document.getElementById("back2");
    front.style.webkitTransform = 'rotateY('+ -180 +'deg)';
    front.style.mozTransform    = 'rotateY('+ -180 +'deg)';
    front.style.msTransform     = 'rotateY('+ -180 +'deg)';
    front.style.oTransform      = 'rotateY('+ -180 +'deg)';
    front.style.transform       = 'rotateY('+ -180 +'deg)';
    back.style.webkitTransform = 'rotateY('+ 0 +'deg)';
    back.style.mozTransform    = 'rotateY('+ 0 +'deg)';
    back.style.msTransform     = 'rotateY('+ 0 +'deg)';
    back.style.oTransform      = 'rotateY('+ 0 +'deg)';
    back.style.transform       = 'rotateY('+ 0 +'deg)';
  }
}
function turnFrontThree() {
  if(width <= 768)
  {
    let front = document.getElementById("front3");
    let back = document.getElementById("back3");
    front.style.webkitTransform = 'rotateY('+ -180 +'deg)';
    front.style.mozTransform    = 'rotateY('+ -180 +'deg)';
    front.style.msTransform     = 'rotateY('+ -180 +'deg)';
    front.style.oTransform      = 'rotateY('+ -180 +'deg)';
    front.style.transform       = 'rotateY('+ -180 +'deg)';
    back.style.webkitTransform = 'rotateY('+ 0 +'deg)';
    back.style.mozTransform    = 'rotateY('+ 0 +'deg)';
    back.style.msTransform     = 'rotateY('+ 0 +'deg)';
    back.style.oTransform      = 'rotateY('+ 0 +'deg)';
    back.style.transform       = 'rotateY('+ 0 +'deg)';
  }
}
