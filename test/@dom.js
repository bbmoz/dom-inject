import test from 'ava'
import dom from './../dist/@dom'

let domInject
let target
let domElements

test('@dom(): inject no elements', t => {
  t.plan(1)
  domInject()(target)
  t.deepEqual(target.$, {})
})

test('@dom(elemOne, elemTwo, elemFour): inject list of elements', t => {
  t.plan(1)
  delete domElements.elemThree
  domElements.elemFour = undefined
  domInject('elemOne', 'elemTwo', 'elemFour')(target)
  t.deepEqual(target.$, domElements)
})

test('@dom: inject all elements', t => {
  t.plan(1)
  domInject(target)
  t.is(target.$, domElements)
})

test.beforeEach(() => {
  target = function () {}
  domElements = {
    elemOne: 'pikachu',
    elemTwo: 'squirtle',
    elemThree: 'charmander'
  }
  domInject = dom(domElements)
})
