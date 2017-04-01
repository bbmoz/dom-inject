import inject from './../../dist/inject'

const domElements = {
  heading: document.getElementById('heading'),
  footer: document.querySelector('footer')
}

export default inject(domElements)
