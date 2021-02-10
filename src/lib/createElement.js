export default function createElement(type, props, ...children) {
  // Sachen gesamelt
  const el = document.createElement(type)
  Object.assign(el, props)
  children && el.append(...children.map(child => child.el ?? child)) // Sachen verteilt
  return el
}
