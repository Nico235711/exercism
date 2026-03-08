export function frontDoorResponse(sentence) {
  return sentence.charAt(0) // return the first letter
}

export function frontDoorPassword(sentence) {
  // also it works with .slice() method
  if (sentence === '') return 'The string can\'t be empty'
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
}

export function backDoorResponse(sentence) {
  // const cleanedSentence = sentence.trimEnd()
  // return cleanedSentence[cleanedSentence.length - 1]
  return sentence.trimEnd().slice(-1)
}

export function backDoorPassword(sentence) {
  return frontDoorPassword(sentence) + ", please"
}

const responseFrontDoor = frontDoorResponse('Stands so high') // => "S"
const passwordFrontDoor = frontDoorPassword('SHIRE') // => "Shire"
const firstBackDoorResponse = backDoorResponse('Stands so high') // h
const secondBackDoorResponse = backDoorResponse('Stands so high   ') // h
const politeResponse = backDoorPassword('horse') // => "Horse, please"

console.log({
  responseFrontDoor, 
  passwordFrontDoor, 
  firstBackDoorResponse, 
  secondBackDoorResponse,
  politeResponse
})