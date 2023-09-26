# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!(https://github.com/onandrew/snake-client/assets/137456118/03094b69-533c-4eb0-97ee-6fee33e8ce91)


## Getting Started

- You will need to navigate over and clone the server code locally. The server code is found here. https://github.com/     lighthouse-labs/snek-multiplayer
- Follow steps inside, or pasted below, the snek server repo to run the server side
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer
npm install
npm run play
- Run the development snake client using the `node play.js` command.

## Acknowledgements

- This game is based off of [the original](https://www.taniarascia.com/snake-game-in-javascript/) by Tania Rascia

## Playing the game

- Use the WASD keys to move the snake around. Avoid crashing the snake into itself or the walls. The goal is to eat the 'food' in order to grow as large as possible
- You can say hello by pressing the H key
- To leave the game, press ctrl + C