import inject from './../../dist/inject-decorator'

const domElements = {
  heading: document.getElementById('heading'),
  footer: document.querySelector('footer')
}

export default inject(domElements)
