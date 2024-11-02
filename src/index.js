import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  videoOnHover()
  arrowOnHover()
})

const cursor = document.querySelector('.cursor')
function videoOnHover() {
  const videoList = document.querySelectorAll('picture img')
  videoList.forEach((video) => {
    video.addEventListener('mouseover', () => {
      cursor.classList.add('hover')
    })
    video.addEventListener('mouseout', () => {
      cursor.classList.remove('hover')
    })
  })
}
function arrowOnHover() {
  const linkList = document.querySelectorAll('.videoCard')

  linkList.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.classList.add('hover')
      cursor.classList.add('hover')
      document.querySelector('.hover .arrow').classList.add('long')
    })
    link.addEventListener('mouseout', () => {
      link.classList.remove('hover')
      cursor.classList.remove('hover')
      document.querySelectorAll('.arrow').forEach((arrow) => {
        arrow.classList.remove('long')
      })
    })
  })
}
