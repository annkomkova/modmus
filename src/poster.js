import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  playMusic()
  // playVideo()
})

function playMusic() {
  const audio = document.querySelector('audio')
  const audioButton = document.querySelector('.sound')
  let isPlaying = false

  audioButton.addEventListener('click', togglePlay())

  function togglePlay() {
    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
    isPlaying = !isPlaying
  }
}
