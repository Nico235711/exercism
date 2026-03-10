// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return .5
      case 'Energizer':
      case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}

const tropicalIsland = timeToMixJuice('Tropical Island'); // => 3
const berriesAndLime = timeToMixJuice('Berries & Lime'); // => 2.5
console.log({tropicalIsland, berriesAndLime})

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let iterator = 0
  let limesCut = 0
  let totalLimesCut = 0
  while (limesCut < wedgesNeeded) {
    switch (limes[iterator]) {
      case 'small':
        limesCut += 6
        break;
      case 'medium':
        limesCut += 8
        break;
      case 'large':
        limesCut += 10
        break;
    }
    totalLimesCut++
    iterator++
  }
  return totalLimesCut
}

const limesCut = limesToCut(25, ['small', 'small', 'large', 'medium', 'small']); // => 4
console.log({limesCut})

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0
  while (i < orders.length && timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[i])
    i++
  }
  return orders.slice(i)
}

const remainingOrdersArr = remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']); // => ['Green Garden']
console.log({remainingOrdersArr})