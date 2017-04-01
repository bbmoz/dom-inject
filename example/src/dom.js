import dom from './../../dist/@dom'

const domElements = {
  heading: document.getElementById('heading'),
  footer: document.querySelector('footer')
}

export default dom(domElements)
