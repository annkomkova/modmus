/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

function mouseMoveCursor() {
  var cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', function (event) {
    var x = event.pageX;
    var y = event.pageY;
    cursor.style.left = "".concat(x, "px");
    cursor.style.top = "".concat(y, "px");
  });
  window.addEventListener('click', function (e) {
    cursor.classList.add('active');
    setTimeout(function () {
      return cursor.classList.remove('active');
    }, 300);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  mouseMoveCursor();
});
/******/ })()
;