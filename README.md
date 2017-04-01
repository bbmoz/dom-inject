# Inject

[![Build Status](https://travis-ci.org/bbmoz/dom-inject.svg)](https://travis-ci.org/bbmoz/dom-inject)

> Create decorators that can inject anything into your JS modules!

## Example using DOM elements

Define an object that represents some dom elements, call the library with it, and then use it to decorate a class as shown below. Elements are attached to `$` of the class.

```javascript
// part 1
import inject from 'inject'

const domElements = {
  heading: document.getElementById('heading'),
  footer: document.querySelector('footer')
}

export default inject(domElements)
```

```javascript
// part 2
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
```

To inject more elements than just `heading`, simply comma delimit i.e. `@dom('heading', 'footer')`. Or if you want access to all elements, simply use `@dom` without any arguments.
