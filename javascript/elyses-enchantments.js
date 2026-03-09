const position = 2;
const replacementCard = 6;
const newCard = 8;
const stackSize = 4;
const stackOps = {
  getItem,
  setItem,
  insertItemAtTop,
  removeItem,
  removeItemFromTop,
  insertItemAtBottom,
  removeItemAtBottom,
  checkSizeOfStack
}

export function getItem(stack, position) {
  return stack[position]
}

export function setItem(stack, position, replacementCard) {
  stack.splice(position, 1, replacementCard) // return the deleted element
  return stack
}

export function insertItemAtTop(stack, newCard) {
  stack.push(newCard)
  return stack
}

export function removeItem(stack, position) {
  stack.splice(position, 1)
  return stack
}

export function removeItemFromTop(stack) {
  stack.pop()
  return stack
}

export function insertItemAtBottom(stack, newCard) {
  stack.unshift(newCard)
  return stack
}


export function removeItemAtBottom(stack) {
  stack.shift()
  return stack
}

export function checkSizeOfStack(stack, stackSize) {
  return stack.length === stackSize
}

const result1 = stackOps.getItem([1, 2, 4, 1], position) // => 4
const result2 = stackOps.setItem([1, 2, 4, 1], position, replacementCard) // => [1, 2, 6, 1]
const result3 = stackOps.insertItemAtTop([1, 2, 4, 1], newCard) // => [1, 2, 1, 4, 8]
const result4 = stackOps.removeItem([1, 2, 4, 1], position) // => [1, 2, 1]
const result5 = stackOps.removeItemFromTop([1, 2, 4, 1]) // => [1, 2, 4]
const result6 = stackOps.insertItemAtBottom([1, 2, 4, 1], newCard) // => [8, 1, 2, 4, 1]
const result7 = stackOps.removeItemAtBottom([1, 2, 4, 1]) // => [2, 4, 1]
const result8 = stackOps.checkSizeOfStack([1, 2, 4, 1], stackSize) // false
console.log({
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7,
  result8,
})