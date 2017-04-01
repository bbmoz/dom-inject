# Dom Inject

> Annotation to inject dom elements into your JS modules.

## Uses

```javascript
// src/modules/Hello.js
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
```

*To inject more elements than just $heading, simply comma delimit. If you want access to all elements, just do `@dom` without any arguments.*

```javascript
// src/$_dom.js
const $_dom = {
  $heading: document.getElementById('heading'),
  $footer: document.getElementById('footer')
}
export default $_dom
```
