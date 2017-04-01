# Dom Inject Decorator

[![Build Status](https://travis-ci.org/bbmoz/dom-inject.svg?branch=master)](https://travis-ci.org/bbmoz/dom-inject)

> Decorator to inject dom elements into your JS modules.

## Use

You need to define an object that represents some dom elements and attach it to `$$` from the library. Then, you can use it to decorate a class as shown below.

```javascript
// part 1
import dom from 'dom-inject'
dom.$$ = {
  $heading: document.getElementById('heading'),
  $footer: document.getElementById('footer')
}
```

```javascript
// part 2
@dom('$heading')
class Hello {
    constructor (text) {
        this.$heading = this.$$dom.$heading
        this._displayDomElements(text)
    }

    _displayDomElements (text) {
        this.$heading.innerHTMl = text
        this.$heading.style = 'display: block'
    }
}
```

To inject more elements than just `$heading`, simply comma delimit i.e. `$dom('$heading', '$footer')`. Or if you want access to all elements, just use `@dom` without any arguments.
