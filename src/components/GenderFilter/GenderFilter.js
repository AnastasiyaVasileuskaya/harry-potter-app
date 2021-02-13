import createElement from '../../lib/createElement'
import Button from '../Button'

export default function GenderFilter(onFilterByGender) {
  const genders = ['male', 'female']

  let currentFilter

  const buttons = genders.map(gender => {
    const button = Button(gender, () => {
      currentFilter = currentFilter === gender ? null : gender
      onFilterByGender(currentFilter)
      buttons.forEach(button => button.toggle(button.text === currentFilter))
    })
    return button
  })
  return createElement('section', { className: 'GenderFilter' }, ...buttons)
}
