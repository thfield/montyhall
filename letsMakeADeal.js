class TheGame {
  constructor(){
    // setup 3 doors, with one winner
    this.doors = this.setupDoors()
    // this.firstChoice
    // this.revealedDoor
    // this.secondChoice
    // this.won
    // this.switched
  }

  setupDoors() {
    let rand = this.getRandomDoor();
    let doors = new Array(3).fill(false)
    doors[rand] = true
    return doors
  }

  // user chooses door 1, 2, or 3
  // reveal door that was not chosen
  //   if montyKnows=true, make sure to not reveal door with winner
  roundOne(firstChoice, montyKnows=true) {
    let theWinner = this.doors.indexOf(true)
    let doorToReveal = (montyKnows) ?
      [0,1,2].find((el)=>{return (el != theWinner && el != firstChoice) })
      :
      [0,1,2].find((el)=>{return (el != firstChoice) })

    this.firstChoice = firstChoice
    this.revealedDoor = doorToReveal
    return doorToReveal
  }

  // user chooses door
  // note if switched or same
  // reveal winning door
  roundTwo(secondChoice){
    //TODO handle (montyKnows == false) case
    this.secondChoice = secondChoice
    this.won = this.doors[secondChoice]
    this.switched = this.firstChoice !== secondChoice
    return this.doors.indexOf(true)
  }

  getRandomDoor(notThisDoor = false) {
    if (typeof notThisDoor === 'number') {
      let newDoor = this.getRandomInt(0,3)
      return (newDoor === notThisDoor) ? this.getRandomDoor(notThisDoor) : newDoor
    } else {
      return this.getRandomInt(0,3)
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //The maximum is exclusive and the minimum is inclusive
  }
}
module.exports = TheGame