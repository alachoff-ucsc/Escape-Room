class PaintingDarkness extends Phaser.Scene {
    constructor() {
        super("paintingSceneDark");
    }

    preload () {
        this.load.image('paintingDark', './assets/Darkness.png');
        this.load.image('paintingDark2', './assets/Scaryface2.png');
        this.load.image('paintingDark3', './assets/Scaryface3.png');
        this.load.image('paintingDark4', './assets/Scaryface4.png');
        this.load.image('paintingDark5', './assets/Scaryface5.png');
    }

    create () {
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.add.image(0, 0, 'paintingDark').setOrigin(0);
        this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the picture?').setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
    
}