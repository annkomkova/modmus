import './stylesheets/cursor.scss'

function mouseMoveCursor() {
  const cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', (event) => {
    let x = event.pageX
    let y = event.pageY

    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
  })
}

document.addEventListener('DOMContentLoaded', () => {
  mouseMoveCursor()
})
