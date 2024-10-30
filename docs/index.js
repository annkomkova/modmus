/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener('DOMContentLoaded', function () {
  videoOnHover();
  arrowOnHover();
});
function videoOnHover() {
  var videoList = document.querySelectorAll('video');
  videoList.forEach(function (video) {
    video.addEventListener('mouseover', function () {
      video.pause();
    });
    video.addEventListener('mouseout', function () {
      video.play();
    });
  });
}
function arrowOnHover() {
  var linkList = document.querySelectorAll('.img-container');
  linkList.forEach(function (link) {
    link.addEventListener('mouseover', function () {
      link.classList.add('hover');
      document.querySelector('.hover .arrow').classList.add('long');
    });
    link.addEventListener('mouseout', function () {
      link.classList.remove('hover');
      document.querySelectorAll('.arrow').forEach(function (arrow) {
        arrow.classList.remove('long');
      });
    });
  });
}
/******/ })()
;