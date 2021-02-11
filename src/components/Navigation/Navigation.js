import './Navigation.css'
import createElement from '../../lib/createElement'

export default function Navigation(onNavigate) {
  const el = createElement('nav', { className: 'Navigation' })

  let currentSelection
  let navigationItems

  function setButtons(texts) {
    const navigationButtons = texts.map(text => {
      const button = createElement(
        'button',
        { className: 'Navigation__button' },
        text
      )
      button.addEventListener('click', () => onNavigationItemClick(text))
      return button
    })
    el.innerHTML = ''
    el.append(...navigationButtons)
    navigationItems = navigationButtons
    currentSelection = navigationButtons[0]
    currentSelection.className = 'active'
  }

  function onNavigationItemClick(text) {
    currentSelection.classList.toggle('active')
    currentSelection = navigationItems.filter(
      item => item.textContent === text
    )[0]
    currentSelection.className = 'active'
    onNavigate(text)
  }

  return { el, setButtons }
}
