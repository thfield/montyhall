const prompt = require('prompt-sync')()
const TheGame = require('./letsMakeADeal')

let theGame = new TheGame
let doorNums = `[1] [2] [3]\n`
let doorState = formatDoors()

displayDoors()

let firstChoice = +prompt('Choose a door: ')
let valid = [1,2,3].indexOf(firstChoice)

while ( valid < 0 ) {
  firstChoice = +prompt('Choose a door: ')
  valid = [1,2,3].indexOf(firstChoice)
}

firstChoice = toZeroIndex(firstChoice)
doorState = formatDoors(firstChoice,'?')
displayDoors()


let revealedDoor = theGame.roundOne( firstChoice )

doorState = formatDoors(revealedDoor,'X', doorState)
console.log('Monty opens a door:')
displayDoors()

let theOtherDoor = [0,1,2].find((el)=>{return (el != theGame.revealedDoor && el != theGame.firstChoice) })
console.log(`Keep your initial choice of door #${fromZeroIndex(theGame.firstChoice)}`)
console.log(`Or Switch to door #${fromZeroIndex(theOtherDoor)} ?`)
let secondChoice = +prompt('(enter a number) ')
secondChoice = toZeroIndex(secondChoice)

let winningDoor = theGame.roundTwo( secondChoice )

theGame.won ? console.log('\nCongratulations!') : console.log('\nSorry!')
console.log(`the prize was behind door #${fromZeroIndex(winningDoor)}`)
doorState = formatDoors(winningDoor,'!')
displayDoors()






function formatDoors(index=-1, symbol='X', doorString=`[ ] [ ] [ ]`){
  const spaces = [1,5,9]

  if (index === -1) { return doorString }

  let newstring = doorString.split('')
  newstring[spaces[index]] = symbol
  return newstring.join('')
}
function displayDoors(){ console.log(`${doorNums}${doorState}\n`) }
function toZeroIndex(num){ return +num - 1 }
function fromZeroIndex(num){ return +num + 1 }