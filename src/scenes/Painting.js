class Painting extends Phaser.Scene {
    constructor() {
        super("paintingScene");
    }

    preload () {
        this.load.image('paintingLight', './assets/PaintingCloseUpLightNew.png');
    }

    create () {
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.add.image(0, 0, 'paintingLight').setOrigin(0);
        this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the picture').setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
    
}