import createElement from '../../lib/createElement'
import './Button.css'

export default function Button(text, onClick) {
  const el = createElement('button', { className: 'Button' }, text)

  el.addEventListener('click', onClick)

  function toggle() {
    el.classList.toggle('selected')
  }
  return { el, toggle }
}
