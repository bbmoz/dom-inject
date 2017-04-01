function dom (...$elements) {
  if ($elements.length === 1 && typeof $elements[0] !== 'string') {
    const target = $elements[0]
    target.$$dom = this.$$
    return
  }

  return function (target) {
    const $$ = {}
    $elements.forEach($element => {
      $$[$element] = this.$$[$element]
    })
    target.$$dom = $$
  }
}

export default dom
