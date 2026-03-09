export function needsLicense(kind) {
  return ["car", "truck"].includes(kind)
}

console.log(needsLicense('car')) // => true
console.log(needsLicense('bike')) // => false

export function chooseVehicle(option1, option2) {
  return option1 < option2 
    ? `${option1} is clearly the better choice.` 
    : `${option2} is clearly the better choice.`
}

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla')) 
// =>  'Toyota Corolla is clearly the better choice.'

console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf')) 
// =>  'Volkswagen Beetle is clearly the better choice.'

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) return originalPrice * .8
  if (age <= 10) return originalPrice * .7
  return originalPrice * .5
}

console.log(calculateResellPrice(1000, 1)) // => 800
console.log(calculateResellPrice(1000, 5)) // => 700
console.log(calculateResellPrice(1000, 15)) // => 500