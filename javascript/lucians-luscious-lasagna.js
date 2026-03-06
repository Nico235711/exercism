export const EXPECTED_MINUTES_IN_OVEN = 40;
const MINUTES_TO_PREPARE = 2

export function remainingMinutesInOven(minutes) {
  return EXPECTED_MINUTES_IN_OVEN - minutes;
}

console.log(remainingMinutesInOven(30)); // 10

export function preparationTimeInMinutes(layers) {
  return MINUTES_TO_PREPARE * layers
}

console.log(preparationTimeInMinutes(2)); // 4

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const preparationTime = preparationTimeInMinutes(numberOfLayers)
  return preparationTime + actualMinutesInOven
}

console.log(totalTimeInMinutes(3, 20)); // 26
