import './Navigation.css'
import createElement from '../../lib/createElement'

const buttonsConfig = [
  { text: 'Slytherin' },
  { text: 'Gryffindor' },
  { text: 'Hufflepuff' },
  { text: 'Ravenclaw' },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  return createElement('nav', { className: 'Navigation' }, ...buttons)
}
