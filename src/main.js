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
    scene: [Menu, Play, Painting, PaintingDark, Win, DeskLight, Clock]

  }
  
let game = new Phaser.Game(config);

// reserve keyboard vars
let keySPACE, keyW, keyA, keyS, keyD, keyE, keyC;

// global vars
let centerX = game.config.width / 2;
let centerY = game.config.height / 2;
let backWall = game.config.height / 4;