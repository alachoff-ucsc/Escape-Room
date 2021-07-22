class Unlock extends Phaser.Scene {
    constructor() {
        super("unlockScene");
    }

    preload () {
        this.load.image('asterisk', './assets/asterisk.png');   // 40x40
        this.load.image('black', './assets/black.png');
        this.load.audio('locked', './assets/audio/door_jostle.wav');
    }

    create() {
        this.add.image(0, 0, 'black').setOrigin(0);
        this.add.text(game.config.width/2, game.config.height/2, 'TYPE THE CODE:').setOrigin(0.5);
        this.add.text(centerX, game.config.height - 20, 'Press C to stop entering code').setOrigin(0.5);

        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        key0 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
        key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        key3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        key4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        key5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
        key6 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
        key7 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
        key8 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
        key9 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
        
        // variables
        this.digit1 = false;
        this.digit2 = false;
        this.digit3 = false;
        this.digit4 = false;
        this.numDigits = 0;
        this.lastDown = null;
    }
    //Code: 9587

    update() {

        // checks which number key was pressed, saves it to lastDown
        if (Phaser.Input.Keyboard.JustDown(key0)) {
            this.lastDown = 0;
        }
        if (Phaser.Input.Keyboard.JustDown(key1)) {
            this.lastDown = 1;
        }
        if (Phaser.Input.Keyboard.JustDown(key2)) {
            this.lastDown = 2;
        }
        if (Phaser.Input.Keyboard.JustDown(key3)) {
            this.lastDown = 3;
        }
        if (Phaser.Input.Keyboard.JustDown(key4)) {
            this.lastDown = 4;
        }
        if (Phaser.Input.Keyboard.JustDown(key5)) {
            this.lastDown = 5;
        }
        if (Phaser.Input.Keyboard.JustDown(key6)) {
            this.lastDown = 6;
        }
        if (Phaser.Input.Keyboard.JustDown(key7)) {
            this.lastDown = 7;
        }
        if (Phaser.Input.Keyboard.JustDown(key8)) {
            this.lastDown = 8;
        }
        if (Phaser.Input.Keyboard.JustDown(key9)) {
            this.lastDown = 9;
        }

        
        // 1st check
        if (this.lastDown != null && this.numDigits == 0) {
            if (this.lastDown == 9) {
                this.digit1 = true;
                console.log('click!');
            }
            else {
                this.digit1 = false;
            }
            this.numDigits++;
            this.add.image(game.config.width/2 - 60, game.config.height/2 + 50, 'asterisk').setOrigin(0);
            this.lastDown = null;
        }
        // 2nd check
        if (this.lastDown != null && this.numDigits == 1) {
            if (this.lastDown == 5) {
                this.digit2 = true;
                console.log('click!');
            }
            else {
                this.digit2 = false;
        }

            this.numDigits++;
            this.add.image(game.config.width/2 - 20, game.config.height/2 + 50, 'asterisk').setOrigin(0);
            this.lastDown = null;
        }
        // 3rd check
        if (this.lastDown != null && this.numDigits == 2) {
            if (this.lastDown == 8) {
                this.digit3 = true;
                console.log('click!');
            }
            else {
                this.digit3 = false;
            }
            this.numDigits++;
            this.add.image(game.config.width/2 + 20, game.config.height/2 + 50, 'asterisk').setOrigin(0);
            this.lastDown = null;
        }
        // 4th check
        if (this.lastDown != null && this.numDigits == 3) {
            if (this.lastDown == 7) {
                this.digit4 = true;
                console.log('click!');
            }
            else {
                this.digit4 = false;
            }
            this.numDigits++;
            this.add.image(game.config.width/2 + 60, game.config.height/2 + 50, 'asterisk').setOrigin(0);
            this.lastDown = null;
        }


        if (this.digit1 && this.digit2 && this.digit3 && this.digit4) {
            this.scene.stop();
            this.scene.stop('playScene');
            this.scene.launch('winScene');
        }
        else if (this.numDigits == 4){
            this.sound.play('locked');
            this.scene.stop();
            this.scene.resume('playScene');
        }
        
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }    
    }
}