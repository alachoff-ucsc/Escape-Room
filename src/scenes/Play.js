class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
  
    preload() {
        // load images and tile sprites
  
        this.load.image('room', './assets/room1.png');
        this.load.image('player', './assets/player1.png');
        this.load.image('desk', './assets/desk.png');
        this.load.image('clock', './assets/clock.png');
        this.load.image('painting', './assets/painting.png');
        this.load.image('blank', './assets/blank.png');
        // this.load.image('paintingDark', './assets/....png')
        this.load.image('switch', './assets/switch.png');
        this.load.image('door', './assets/door.png');

  
        // load audio
        this.load.audio('step1', './assets/audio/fstep1.wav');
        this.load.audio('step2', './assets/audio/fstep2.wav');
        this.load.audio('step3', './assets/audio/fstep3.wav');
        this.load.audio('step4', './assets/audio/fstep4.wav');
        this.load.audio('step5', './assets/audio/fstep5.wav');
        this.load.audio('doorJostle', './assets/audio/door_jostle.wav');
        this.load.audio('doorOpen', './assets/audio/door_open.wav');
        this.load.audio('switchOn', './assets/audio/switch_on.wav');
        this.load.audio('switchOff', './assets/audio/switch_off.wav');
        this.load.audio('clockLoop', './assets/audio/clock_loop.wav');
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
        this.clock.setOffset(0, -30);
               // shift hitbox up
        this.clock.body.onOverlap = true;

        this.switch = this.physics.add.sprite(game.config.width / 1.3, backWall - 3, 'switch');
        this.switch.body.onOverlap = true;

        this.player = this.physics.add.sprite(centerX, centerY, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.body.onCollide = true;

        this.deskint = this.physics.add.sprite(35, centerY-10, 'blank');
        this.deskint.setSize(70, 15);
        this.deskint.body.onOverlap = true;
        
        this.desk = this.physics.add.sprite(40, centerY, 'desk');
        this.desk.setSize(75, 15);      // change the desk hitbox size
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
        this.stepping = false;
        this.clockLoop = this.sound.add('clockLoop', { loop: true});
        this.clockLoop.play()
        
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
                this.stepping = true;
                this.playStep = this.sound.add(
                    this.steps[Math.floor(Math.random() * 5)]
                );
                this.playStep.play({ detune: Math.floor(Math.random() * 300), rate: 1.5, volume: 0.7});
                this.time.delayedCall(this.movespeed * 2.5, () => {
                    this.stepping = false;
                }, null, this);
            }
        }
        // console.log(this.player.body.speed);
        // console.log(this.player.body.blocked);

        // movement stuff
        if (keyW.isDown && !this.player.body.blocked.up) {
            this.player.body.setVelocityY(-this.movespeed);
        }
        else if (keyS.isDown && !this.player.body.blocked.down) {
            this.player.body.setVelocityY(this.movespeed);
        }
        else {
            this.player.body.setVelocityY(0);
        }
        if (keyA.isDown && !this.player.body.blocked.left) {
            this.player.body.setVelocityX(-this.movespeed);
        }
        else if (keyD.isDown && !this.player.body.blocked.right) {
            this.player.body.setVelocityX(this.movespeed);
        }
        else {
            this.player.body.setVelocityX(0);
        }

        // turns lights on/off
        if (this.lightsOn) {
            let p = this.clock.tint;
            this.clock.tint = p;
            this.painting.tint = p;
            this.background.tint = p;
            this.door.tint = p;
            this.desk.tint = p;
        }
        else {
            this.clock.tint = 0;
            this.painting.tint = 0;
            this.background.tint = 0;
            this.door.tint = 0;
            this.desk.tint = 0;

        }

        // create physics world events
        // note: you MUST use a .collide/.overlap check in update() AND set body.onCollide/body.onOverlap/.onWorldBounds to true for these to work
        
        // check collisions and overlaps; collide makes the object solid, overlap allows for overlapping of hitboxes
        this.physics.collide(this.player, this.clock);
        this.physics.collide(this.player, this.desk);
        this.physics.overlap(this.player, this.door);
        this.physics.overlap(this.player, this.painting);
        this.physics.overlap(this.player, this.deskint);
        this.physics.overlap(this.player, this.switch);

        // check for interactions
        this.physics.world.on('overlap', (obj1, obj2, body1, body2)=>{
            // lightswitch
            if (`${obj2.texture.key}` == 'switch' && Phaser.Input.Keyboard.JustDown(keyE)) {
                if (this.lightsOn) {
                    this.sound.play('switchOff');
                }
                else if (!this.lightsOn) {
                    this.sound.play('switchOn');
                }
                this.lightsOn = !this.lightsOn;
            }
            
            // painting light
            if (`${obj2.texture.key}` == 'painting' && this.lightsOn && Phaser.Input.Keyboard.JustDown(keyE)) {
                this.scene.pause();
                this.scene.launch('paintingScene');
            }
            
            // desk
            if (`${obj2.texture.key}` == 'blank' && this.lightsOn && Phaser.Input.Keyboard.JustDown(keyE)) {
                this.scene.pause();
                this.scene.launch('deskScene');
            }

            // painting dark
            if (`${obj2.texture.key}` == 'painting' && this.lightsOn == false && Phaser.Input.Keyboard.JustDown(keyE)) {
                this.scene.pause();
                this.scene.launch('paintingDarkScene');
            }

            // door
            if (`${obj2.texture.key}` == 'door' && Phaser.Input.Keyboard.JustDown(keyE)) {
                this.sound.play('doorOpen')
                this.scene.stop();
                this.scene.launch('winScene');
            }
        });
    }
}