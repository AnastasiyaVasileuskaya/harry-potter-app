import createElement from '../../lib/createElement'
import Card from '../Card'
import './HomePage.css'

export default function HomePage(cards) {
  const el = createElement('main', { calssName: 'HomePage' })

  cards && setCards(cards)

  function setCards(cards) {
    const cardElements = cards.map(({ name, gender }) => Card(name, gender))
    el.innerHTML = ''
    el.append(...cardElements)
  }

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    setCards,
    show,
    hide,
  }
}
