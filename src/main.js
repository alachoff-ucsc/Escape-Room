// Credits
// Jalen Pastor, Ryan Palmberg, Asher Lachoff
//Game Title: The Face in the Dark
// Date of Completion: 21 July, 2021

// Creative tilt: We are the sole creators of our visual assets
// The bleak colors and ehoes of the clock were made to instill discomfort in the player.
// We are really happy with how this turned out. We think we polished this game and utilized its full potential.
// Some unique attributes we implemented were interactivity with objects and a passcoed that requires player input.
// The difficulty is dictated by the timer and the puzzles we implemented.
// Our core mechanic of flickering the lights to uncover secrets pertains to the theme of 'lost and found.'
// Every visual asset was made by Ryan in Clip Studio Paint.
// Ticking sound by: Dave Incamas https://freesound.org/people/daveincamas/sounds/27077/
// Clock chime by: radwoc https://freesound.org/people/radwoc/sounds/256821/
// Vase shattering by: CosmicEmbers https://freesound.org/people/CosmicEmbers/sounds/160759/
// The editing of these tracks and the remaining sound effects were created by Asher.
// Jalen took on the bulk of the programming, though everyone contributed greatly on this front.
// Jalen was responsible for the foundation of the programming, the timer, win and lose conditions, the interactivity of objects, and polish.
// Ryan was responsible for layered scene transitions and the light switch mechanic.
// Asher was responsible for the timing and implementation of sound effects.

let config = {
    type: Phaser.AUTO,
    width: 502,
    height: 376,
    physics: {
      default: 'arcade',
      arcade: {
        debug: true
      }
    },
    scene: [Menu, Play, Painting, PaintingDark, Win, Lose, Desk, DeskBroken, Clock, Riddle, Unlock]

  }
  
let game = new Phaser.Game(config);

// reserve keyboard vars
let keySPACE, keyW, keyA, keyS, keyD, keyE, keyC;
let key0, key1, key2, key3, key4, key5, key6, key7, key8, key9;   // for code entry

// global vars
let centerX = game.config.width / 2;
let centerY = game.config.height / 2;
let backWall = game.config.height / 4;