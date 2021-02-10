const characterUrl = 'http://hp-api.herokuapp.com/api/characters'

export default function getCharacters() {
  return fetch(characterUrl).then(res => res.json())
}
