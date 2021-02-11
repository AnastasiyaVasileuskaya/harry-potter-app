import AppHeader from './components/AppHeader'
import createElement from './lib/createElement'
import getCharacters from './services/getCharacters'
import Grid from './components/Grid/Grid'
import HomePage from './components/HomePage/HomePage'
import Navigation from './components/Navigation'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const homePage = HomePage()
  const navigation = Navigation(onNavigate)

  const grid = Grid(header, homePage, navigation)
  document.body.append(grid)

  let allCharacters = null

  getCharacters()
    .then(characters => {
      allCharacters = characters
      navigation.setButtons(createNavigationTexts(characters))
    })
    .catch(error => handleGetCharacterError(error))

  function createNavigationTexts(characters) {
    const navigationItems = Array.from(
      new Set(
        characters
          .map(character => character.house)
          .filter(house => house !== '')
      )
    )
    onNavigate(navigationItems[0])
    return navigationItems
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color:crimson' },
      error.message
    )
    document.body.append(errorMessage)
  }

  function onNavigate(text) {
    const houseCharacters = allCharacters.filter(c => c.house === text)
    homePage.setCards(houseCharacters)
  }
}
