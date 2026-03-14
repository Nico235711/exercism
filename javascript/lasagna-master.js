function cookingStatus(remainingTime) {
  if (remainingTime === undefined) return 'You forgot to set the timer.'
  return remainingTime > 0 ? 'Not done, please wait.' : 'Lasagna is done.'
}

// const result1 = cookingStatus(12); // => 'Not done, please wait.'
// const result2 = cookingStatus(); // => 'You forgot to set the timer.'
// const result3 = cookingStatus(0); // => 'Lasagna is done.'
// console.log({result1, result2, result3})

function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime
}

const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
// const result1 = preparationTime(layers, 3); // => 18
// const result2 = preparationTime(layers); // => 12
// console.log({result1, result2})

function quantities(layers) {
  // O(n)
  return layers.reduce((accu, layer) => {
    if (layer === 'noodles') accu.noodles += 50
    if (layer === 'sauce') accu.sauce += 0.2
    return accu
  }, { noodles: 0, sauce: 0 })

  // O(2n)
  // const noodlesNeeded = layers.filter(layer => layer === 'noodles').length * 50
  // const sauceNeeded = layers.filter(layer => layer === 'sauce').length * 0.2
  // return { noodles: noodlesNeeded, sauce: sauceNeeded }
}

const result = quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']);
// => { noodles: 100, sauce: 0.4 }
console.log({result})

function addSecretIngredient(friendsList, myList) {
  const secret = friendsList[friendsList.length - 1];
  myList.push(secret);
}

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper', 'tomatoes'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

addSecretIngredient(friendsList, myList);
// => undefined

console.log(myList);
// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']

function scaleRecipe (recipe, portions) {
  const newRecipe = { ...recipe }
  const portionsNeededPerLasagna = 2
  const amountNeeded = portions / portionsNeededPerLasagna
  for (const key in newRecipe) {
    newRecipe[key] *= amountNeeded
  }
  return newRecipe
}

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

const modifiedRecipe = scaleRecipe(recipe, 4);
// =>
// {
//   noodles: 400,
//   sauce: 1,
//   mozzarella: 2,
//   meat: 200,
// };

console.log(modifiedRecipe);
console.log(recipe);
// =>
// {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };