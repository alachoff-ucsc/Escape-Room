let config = {
    type: Phaser.AUTO,
    width: 502,
    height: 376,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: [Menu, Play]
  }
  
let game = new Phaser.Game(config);

// reserve keyboard vars
let keySPACE, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyE, keyM;

// global vars
let centerX = game.config.width / 2;
let centerY = game.config.height / 2;
let backWall = game.config.height / 4;