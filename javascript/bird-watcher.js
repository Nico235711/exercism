// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // also it works with .reduce() and .forEach() method
  let total = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i]
  }
  return total
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const start = (week - 1) * 7
  const end = start + 7
  let total = 0
  for (let i = start; i < end; i++) {
    total += birdsPerDay[i]
  }
  return total
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1
  }
}

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
const totalBirds = totalBirdCount(birdsPerDay); // => 34
const totalBirdsInWeek = birdsInWeek(birdsPerDay, 2); // => 12

console.log({totalBirds, totalBirdsInWeek})
const fixBirdsPerDay = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(fixBirdsPerDay);
console.log({fixBirdsPerDay}) // => [3, 5, 1, 7, 5, 1]
