function dom (domElements) {
  return function (...$elements) {
    if ($elements.length === 1 && typeof $elements[0] === 'function') {
      const target = $elements[0]
      target.$ = domElements
      return
    }

    return function (target) {
      const filteredDomElements = {}
      $elements.forEach($element => {
        filteredDomElements[$element] = domElements[$element]
      })
      target.$ = filteredDomElements
    }
  }
}

module.exports = dom
