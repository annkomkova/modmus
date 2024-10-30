import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  videoOnHover()
  arrowOnHover()
})

function videoOnHover() {
  const videoList = document.querySelectorAll('video')
  videoList.forEach((video) => {
    video.addEventListener('mouseover', () => {
      video.pause()
    })
    video.addEventListener('mouseout', () => {
      video.play()
    })
  })
}
function arrowOnHover() {
  const linkList = document.querySelectorAll('.img-container')

  linkList.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.classList.add('hover')
      document.querySelector('.hover .arrow').classList.add('long')
    })
    link.addEventListener('mouseout', () => {
      link.classList.remove('hover')

      document.querySelectorAll('.arrow').forEach((arrow) => {
        arrow.classList.remove('long')
      })
    })
  })
}
