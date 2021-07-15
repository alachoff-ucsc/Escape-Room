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
        this.painting.setOffset(0, 30)       // shift for proper observable distance
        this.painting.body.onOverlap = true;

        this.door = this.physics.add.sprite(game.config.width / 1.5, backWall, 'door');
        this.door.body.onOverlap = true;

        this.clock = this.physics.add.sprite(game.config.width - 20, backWall, 'clock');
        this.clock.body.setImmovable(true);     // for solid collisions
        this.clock.setOffset(0, -30);       // shift hitbox up
        this.clock.body.onOverlap = true;

        this.switch = this.physics.add.sprite(game.config.width / 1.3, backWall - 3, 'switch');
        this.switch.body.onOverlap = true;

        this.player = this.physics.add.sprite(centerX, centerY, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.body.onCollide = true;
        
        this.desk = this.physics.add.sprite(40, centerY, 'desk');
        this.desk.setSize(70, 15);      // change the desk hitbox size
        this.desk.setOffset(0, 20);     // shift the hitbox down
        this.desk.body.setImmovable(true);      // for solid collisions


        // camera
        this.camera = this.cameras.main;
        this.camera.setBounds(0, 0, game.config.width, game.config.height)
        this.camera.setZoom(1.3)
        this.camera.setDeadzone(60, 40);
        this.camera.startFollow(this.player);

        // add audio array for randomized steps
        this.steps = ['step1', 'step2', 'step3', 'step4', 'step5'];
        this.stepping = false
        
        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        // variables
        this.movespeed = 140;
        this.lightsOn = true;
    }

    update() {
        // play footsteps sound
        if (this.player.body.speed != 0) {
            // pick random from this.steps and play with a delay
            if (!this.stepping) {
                this.stepping = true
                this.playStep = this.sound.add(
                    this.steps[Math.floor(Math.random() * 5)]
                );
                this.playStep.play({ volume: 0.4,rate: 1.2, detune: Math.floor(Math.random() * 300) });
                this.time.delayedCall(400, () => {
                    this.stepping = false
                }, null, this);
            }
        }

        if (keyW.isDown) {
            this.player.body.setVelocityY(-this.movespeed);
        }
        else if (keyS.isDown) {
            this.player.body.setVelocityY(this.movespeed);
        }
        else {
            this.player.body.setVelocityY(0);
        }
        if (keyA.isDown) {
            this.player.body.setVelocityX(-this.movespeed);
        }
        else if (keyD.isDown) {
            this.player.body.setVelocityX(this.movespeed);
        }
        else {
            this.player.body.setVelocityX(0);
        }

        // create physics world events
        // note: you MUST use a .collide/.overlap check in update() AND set body.onCollide/body.onOverlap/.onWorldBounds to true for these to work
        
        // check collisions and overlaps; collide makes the object solid, overlap allows for overlapping of hitboxes
        this.physics.collide(this.player, this.clock);
        this.physics.collide(this.player, this.desk);
        this.physics.overlap(this.player, this.door);
        this.physics.overlap(this.player, this.painting);
        this.physics.overlap(this.player, this.switch);

        // check for interactions
        this.physics.world.on('overlap', (obj1, obj2, body1, body2)=>{
            if (`${obj2.texture.key}` == 'switch' && Phaser.Input.Keyboard.JustDown(keyE)) {
                this.lightsOn = !this.lightsOn;
                console.log('lightsOn is:');
                console.log(this.lightsOn);
            }
            if (`${obj2.texture.key}` == 'painting' && Phaser.Input.Keyboard.JustDown(keyE)) {
                this.scene.pause();
                this.scene.launch('paintingScene');
            }
            if (`${obj2.texture.key}` == 'door' && Phaser.Input.Keyboard.JustDown(keyE)) {
                // add door condition here
            }
        });

        // if the lights are off
        if (!this.lightsOn) {
            this.background.setAlpha(0);
            this.painting.setAlpha(0);
            this.clock.setAlpha(0);
            this.desk.setAlpha(0);
            this.door.setAlpha(0);
        }
        else {
            this.background.setAlpha(1);
            this.painting.setAlpha(1);
            this.clock.setAlpha(1);
            this.desk.setAlpha(1);
            this.door.setAlpha(1);
        }
    }
}