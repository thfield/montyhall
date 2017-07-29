/**
* @param {integer} simulations - number of simulations to run
* @param {('switch'|'stay'|'random')} switchOrStay - always switch, always stay, or randomly choose (default)
*/

const TheGame = require('./letsMakeADeal')

let simulations = process.argv[2] || 100
let switchOrStay = process.argv[3] || 'random'

let gamesArr = []

for (let i=0; i<simulations ;i++){
  let theGame = new TheGame
  theGame.roundOne( theGame.getRandomDoor() )

  let roundTwoChoice
  switch (switchOrStay) {
    case 'switch':
      roundTwoChoice = switchDoors(theGame)
      break
    case 'stay':
      roundTwoChoice = theGame.firstChoice
      break
    case 'random':
    default:
      roundTwoChoice = theGame.getRandomDoor(theGame.revealedDoor)
      break
  }

  theGame.roundTwo( roundTwoChoice )

  gamesArr.push( {won: theGame.won, switched: theGame.switched} )
}

console.log('Rounds played: ', gamesArr.length)

let winCount = gamesArr.reduce((sum,val)=>{ return val.won?sum+1:sum},0)
let winDidSwitchCount = gamesArr.reduce((sum,val)=>{ return (val.won&&val.switched)?sum+1:sum},0)
let winNotSwitchCount = gamesArr.reduce((sum,val)=>{ return (val.won&&!val.switched)?sum+1:sum},0)

console.log('# of wins: ', winCount)
console.log('% of wins when switching: ', winDidSwitchCount/winCount * 100)
console.log('% of wins when staying: ', winNotSwitchCount/winCount * 100)





function switchDoors(theGame){
  return [0,1,2].find((el)=>{return (el != theGame.revealedDoor && el != theGame.firstChoice) })
}
