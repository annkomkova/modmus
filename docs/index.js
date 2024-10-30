/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener('DOMContentLoaded', function () {
  videoOnHover();
  arrowOnHover();
});
var cursor = document.querySelector('.cursor');
function videoOnHover() {
  var videoList = document.querySelectorAll('video');
  videoList.forEach(function (video) {
    video.addEventListener('mouseover', function () {
      video.pause();
      cursor.classList.add('hover');
    });
    video.addEventListener('mouseout', function () {
      video.play();
      cursor.classList.remove('hover');
    });
  });
}
function arrowOnHover() {
  var linkList = document.querySelectorAll('.videoCard');
  linkList.forEach(function (link) {
    link.addEventListener('mouseover', function () {
      link.classList.add('hover');
      cursor.classList.add('hover');
      document.querySelector('.hover .arrow').classList.add('long');
    });
    link.addEventListener('mouseout', function () {
      link.classList.remove('hover');
      cursor.classList.remove('hover');
      document.querySelectorAll('.arrow').forEach(function (arrow) {
        arrow.classList.remove('long');
      });
    });
  });
}
/******/ })()
;