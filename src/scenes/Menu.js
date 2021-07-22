class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
  
  create() {
    let menuConfig = {
      fontFamily: 'Georgia',
      fontSize: '16px',
      backgroundColor: '#800000',
      color: '#FFFFFF',
      align: 'right',
      padding: {
        top: 5,
        bottom: 5,
      },
      fixedWidth: 0   
    }

    // show menu text
    this.add.text(game.config.width/2, game.config.height/5, 'The Face in the Dark', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/3.5, 'Use WASD to move', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2.5, 'Objective: Use your wits to escape before time runs out!', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2, 'Use E to interact with objects', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';
    this.add.text(game.config.width/2, game.config.height/1.5, 'Press SPACE to begin', menuConfig).setOrigin(0.5);

    // define keys
    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    // start game
    if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
      this.scene.start('playScene');
    }
  }
}