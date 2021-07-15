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
        this.load.audio('step1', './assets/fstep1.wav');
        this.load.audio('step2', './assets/fstep2.wav');
        this.load.audio('step3', './assets/fstep3.wav');
        this.load.audio('step4', './assets/fstep4.wav');
        this.load.audio('step5', './assets/fstep5.wav');
    }

    create () {
        // place tile sprite and set world boundaries
        this.background = this.add.tileSprite(0, 0, 502, 376, 'room').setOrigin(0, 0);
        this.physics.world.setBounds(0, game.config.height / 4 - 5, game.config.width, game.config.height - game.config.height / 4 + 5);
        this.physics.world.setBoundsCollision();

        // place room objects
        this.painting = this.physics.add.sprite(game.config.width / 3, backWall - 21, 'painting');
        this.door = this.physics.add.sprite(game.config.width / 1.5, backWall, 'door');
        this.clock = this.physics.add.sprite(game.config.width - 20, backWall, 'clock');
        this.switch = this.physics.add.sprite(game.config.width / 1.35, backWall - 3, 'switch');
        this.player = this.physics.add.sprite(centerX, centerY, 'player');
        this.player.setCollideWorldBounds(true);
        this.desk = this.physics.add.sprite(40, centerY, 'desk');

        // add audio
        this.steps = ['step1', 'step2', 'step3', 'step4', 'step5'];
        this.stepping = false

        // temporary text
        this.add.text(game.config.width / 2, game.config.height - 20, 'Press M to go to menu').setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);    // temporary

        // variables
        this.movespeed = 120;
    }

    update() {

        if (keyLEFT.isDown || keyRIGHT.isDown || keyUP.isDown || keyDOWN.isDown) {
            // pick random from this.steps and play with a delay
            if (!this.stepping) {
                this.stepping = true
                this.playStep = this.sound.add(
                    this.steps[Math.floor(Math.random() * 5)]
                );
                this.playStep.play({ detune: Math.floor(Math.random() * 300) });
                this.time.delayedCall(800, () => {
                    this.stepping = false
                }, null, this);
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keyM)) 
            this.scene.start('menuScene');

        if (keyUP.isDown) {
            this.player.body.setVelocityY(-this.movespeed);
        }
        else if (keyDOWN.isDown) {
            this.player.body.setVelocityY(this.movespeed);
        }
        else {
            this.player.body.setVelocityY(0);
        }
        if (keyLEFT.isDown) {
            this.player.body.setVelocityX(-this.movespeed);
        }
        else if (keyRIGHT.isDown) {
            this.player.body.setVelocityX(this.movespeed);
        }
        else {
            this.player.body.setVelocityX(0);
        }
    }
}