/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener('DOMContentLoaded', function () {
  playMusic();
  // playVideo()
});
function playMusic() {
  var audio = document.querySelector('audio');
  var audioButton = document.querySelector('.sound');
  var isPlaying = false;
  audioButton.addEventListener('click', togglePlay());
  function togglePlay() {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    isPlaying = !isPlaying;
  }
}
/******/ })()
;