class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
  
    preload() {
        // load images and tile sprites
  
        this.load.image('room', './assets/room.png');
        this.load.image('player', './assets/player.png');
        this.load.image('desk', './assets/desk.png');
        this.load.image('clock', './assets/clock.png');
        this.load.image('painting', './assets/painting.png');
        this.load.image('switch', './assets/switch.png');
        this.load.image('door', './assets/door.png');
  
        // load audio
        this.load.audio('fstep1', './assets/fstep1.wav');
    }

    create () {
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 502, 376, 'room').setOrigin(0, 0);

        //place room objects
        this.painting = this.physics.add.sprite(game.config.width / 3, backWall - 21, 'painting');
        this.door = this.physics.add.sprite(game.config.width / 1.5, backWall, 'door');
        this.clock = this.physics.add.sprite(game.config.width - 20, backWall, 'clock');
        this.switch = this.physics.add.sprite(game.config.width / 1.4, backWall - 3, 'switch');
        this.player = new Player(this, centerX, centerY, 'player').setOrigin(0.5, 0);
        this.desk = this.physics.add.sprite(40, centerY, 'desk');

        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    }

    update() {
        this.player.update();
    }
}