@dom('$heading')
class Hello {
    constructor (text) {
        const { $heading } = this.$_dom
        this.$heading = $heading
        this.text = text
        this._displayDomElements()
    }

    _displayDomElements () {
        this.$heading.innerHTMl = this.text
        this.$heading.style = 'display: block'
    }
}

export default Hello
