import createElement from '../../lib/createElement'
import './Card.css'

export default function Card(name, gender) {
  const nameEl = createElement('h2', { innerText: name })
  const genderEl = createElement('p', { innerText: gender })

  const el = createElement('section', { className: 'Card' }, nameEl, genderEl)

  return el
}
