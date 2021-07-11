let config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    scene: [Menu, Play]
  }
  
  let game = new Phaser.Game(config);