import dom from './dom'

@dom('heading')
class Hello {
  constructor (text) {
    this.$heading = Hello.$.heading
    this._displayDomElements(text)
  }

  _displayDomElements (text) {
    this.$heading.innerHTML = text
    this.$heading.style = 'display: block'
  }
}

export default Hello
