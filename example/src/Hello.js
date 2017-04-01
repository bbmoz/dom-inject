import dom from './dom'

@dom('$heading')
class Hello {
    constructor (text) {
        const { $heading } = this.$$dom
        this.$heading = $heading
        this._displayDomElements(text)
    }

    _displayDomElements (text) {
        this.$heading.innerHTMl = text
        this.$heading.style = 'display: block'
    }
}

export default Hello
