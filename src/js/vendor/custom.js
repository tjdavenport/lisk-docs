;(function () {
  'use strict'

  var navList = document.querySelectorAll('.nav-item:not(.single-page)');

  /*if (navList[1].childNodes[3].textContent === "Explanations") {
    navList[2].classList.add("is-active")
  } else {
    navList[1].classList.add("is-active");
  }*/

  navList[1].classList.add("is-active");

  var images = document.querySelectorAll('img');

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute('data-zoomable','true');
  }
  mediumZoom('[data-zoomable]');

})()

