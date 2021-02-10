import AppHeader from './components/AppHeader'
import Card from './components/Card'
import createElement from './lib/createElement'
import getCharacters from './services/getCharacters'
import Grid from './components/Grid/Grid'
import HomePage from './components/HomePage/HomePage'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const homePage = HomePage()

  const grid = Grid(header, homePage)
  document.body.append(grid)

  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters
      .filter(character => character.house === 'Slytherin')
      .map(character => Card(character.name, character.gender))
    document.body.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color:crimson' },
      error.message
    )
    document.body.append(errorMessage)
  }
}
