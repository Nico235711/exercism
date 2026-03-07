const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = false;
const petDogIsPresent = true;

export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake
}

export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  // const firstWayToFreePrisoner = petDogIsPresent && !archerIsAwake
  if (petDogIsPresent) {
    return !archerIsAwake
  }
  // const secondWayToFreePrisoner = canExecuteFastAttack(knightIsAwake) &&  canSignalPrisoner(archerIsAwake, prisonerIsAwake)

  return !knightIsAwake && !archerIsAwake && prisonerIsAwake
}

const fastAttack = canExecuteFastAttack(knightIsAwake) // false
const spy = canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) // true
const signalPrisoner = canSignalPrisoner(archerIsAwake, prisonerIsAwake) // true
const freePrisoner = canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) // false
console.log({fastAttack, spy, signalPrisoner, freePrisoner})