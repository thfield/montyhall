# The Monty Hall Problem

A JS implementation of the [Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem).  Maybe not the most elegant.  But using ES6.

## Play
Install dependencies with `npm install`

You can play once, or run a bunch of simulations. From the command line:
- `$ node play.js` -- play on the command line once.  remember terminal games?
- `$ node simulate.js 1000 stay` -- this will run 1000 simulations, keeping the same door every time
- `$ node simulate.js 300 switch` -- this will run 300 simulations, always switching the door
- `$ node simulate.js` -- this will run 100 simulations, randomly choosing to switch or keep the door

