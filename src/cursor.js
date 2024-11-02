import './stylesheets/cursor.css'

function mouseMoveCursor() {
  const cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', (event) => {
    let x = event.pageX
    let y = event.pageY

    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
  })

  window.addEventListener('click', (e) => {
    cursor.classList.add('active')
    setTimeout(() => cursor.classList.remove('active'), 300)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  mouseMoveCursor()
})
