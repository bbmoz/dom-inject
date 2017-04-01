import test from 'ava'
import inject from './../dist/inject-decorator'

let injector
let target
let elements

test('inject(): inject no elements', t => {
  t.plan(1)
  injector()(target)
  t.deepEqual(target.$, {})
})

test('inject(elemOne, elemTwo, elemFour): inject list of elements', t => {
  t.plan(1)
  delete elements.elemThree
  elements.elemFour = undefined
  injector('elemOne', 'elemTwo', 'elemFour')(target)
  t.deepEqual(target.$, elements)
})

test('inject: inject all elements', t => {
  t.plan(1)
  injector(target)
  t.is(target.$, elements)
})

test.beforeEach(() => {
  target = function () {}
  elements = {
    elemOne: 'pikachu',
    elemTwo: 'squirtle',
    elemThree: 'charmander'
  }
  injector = inject(elements)
})
