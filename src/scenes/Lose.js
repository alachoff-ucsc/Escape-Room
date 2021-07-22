class Lose extends Phaser.Scene {
    constructor() {
        super("loseScene");
    }

    preload() {
        this.load.image('gameover', './assets/GameOver.png');
        this.load.audio('clockChime', './assets/audio/clockchime.wav');
    }

    create() {
        this.add.image(0, 0, 'gameover').setOrigin(0);
        this.clockChime = this.sound.add('clockChime');
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.sound.stopAll();
        this.clockChime.play();
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.clockChime.stop();
            this.scene.stop();
            this.scene.start('menuScene');
        }
    }
}