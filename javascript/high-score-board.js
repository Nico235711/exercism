// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  return {
    'The Best Ever': 1000000
  }
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  return {
    ...scoreBoard,
    [player]: score
  }
}

const board = addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373);
// => {'Dave Thomas': 0, 'José Valim': 486373}
console.log({board});

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]
  return scoreBoard
}

const board2 = removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas'); // => {}
const board3 = removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras'); // => { 'Dave Thomas': 0 }
console.log({board2, board3})
/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  return {
    ...scoreBoard,
    [player]: scoreBoard[player] + points
  }
}

const board4 = updateScore({ 'Freyja Ćirić': 0 }, 'Freyja Ćirić', 73); // => {"Freyja Ćirić", 73}
console.log({board4})

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {    
    scoreBoard[key] += 100
  }
  return scoreBoard
}

const scoreBoard = {
  'Dave Thomas': 44,
  'Freyja Ćirić': 539,
  'José Valim': 265,
};

const board5 = applyMondayBonus(scoreBoard);
// => { 'Dave Thomas': 144, 'Freyja Ćirić': 639, 'José Valim': 365 }
console.log({board5})