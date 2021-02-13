import createElement from '../../lib/createElement'
import './SearchBar.css'

export default function SearchBar(onSearch) {
  const el = createElement('input', {
    className: 'SearchBar',
    type: 'text',
    placeholder: 'Search...',
  })

  el.addEventListener('input', event => {
    const searchString = event.target.value
    onSearch(searchString)
  })
  return el
}
