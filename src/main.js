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