function inject (elements) {
  return function (...$elements) {
    if ($elements.length === 1 && typeof $elements[0] === 'function') {
      const target = $elements[0]
      target.$ = elements
      return
    }

    return function (target) {
      const filteredElements = {}
      $elements.forEach($element => {
        filteredElements[$element] = elements[$element]
      })
      target.$ = filteredElements
    }
  }
}

module.exports = inject
