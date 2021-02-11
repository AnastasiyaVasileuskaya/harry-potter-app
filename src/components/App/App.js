import createElement from '../../lib/createElement'
import getCharacters from '../../services/getCharacters'
import AppHeader from '../AppHeader'
import Card from '../Card'
import './App.css'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const el = createElement('div', { className: 'App' }, header)

  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    el.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    el.append(errorMessage)
  }

  return el
}
