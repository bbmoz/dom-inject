# Dom Inject

[![Build Status](https://travis-ci.org/bbmoz/dom-inject.svg)](https://travis-ci.org/bbmoz/dom-inject)

> Decorator to inject dom elements into your JS modules.

## Use

You need to define an object that represents some dom elements and call the library with it. Then, you can use it to decorate a class as shown below.

```javascript
// part 1
import dom from 'dom-inject'

const domElements = {
  heading: document.getElementById('heading'),
  footer: document.querySelector('footer')
}

export default dom(domElements)
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

To inject more elements than just `heading`, simply comma delimit i.e. `@dom('heading', 'footer')`. Or if you want access to all elements, just use `@dom` without any arguments.
