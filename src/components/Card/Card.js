import createElement from '../../lib/createElement'
import './Card.css'

export default function Card({ name, house, image }) {
  const color = getColorByHouse(house)

  const heading = createElement('h2', { className: 'Card__heading' }, name)
  const houseEl = createElement(
    'span',
    { className: 'Card__house', style: `color: ${color}` },
    house
  )
  const imageEl = createElement('img', {
    className: 'Card__image',
    src: image,
    alt: '',
  })

  return createElement(
    'section',
    { className: 'Card' },
    heading,
    houseEl,
    imageEl
  )
}

function getColorByHouse(house) {
  const ColorMapp = {
    Gryffindor: 'crimson',
    Hufflepuff: 'goldenrod',
    Ravenclaw: 'cornflowerblue',
    Slytherin: 'forestgreen',
  }
  return ColorMapp[house]
}
