import createElement from '../../lib/createElement'
import './Card.css'

export default function Card(name) {
  return createElement('section', { className: 'Card' }, name)
}
