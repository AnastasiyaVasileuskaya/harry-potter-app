import createElement from '../../lib/createElement'
import './Grid.css'

export default function Grid(...children) {
  // html-Elemente reingereicht
  return createElement(
    'div',
    {
      className: 'Grid',
    },
    ...children // html elemente werden an createElemente
  )
}
