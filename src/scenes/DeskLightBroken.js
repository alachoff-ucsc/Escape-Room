class DeskLight extends Phaser.Scene {
    constructor() {
        super("deskScene");
    }

    preload () {
        this.load.image('paintingLight2', './assets/paintingLight.png');
        this.load.image('potdesk', './assets/Deskpot.png');
        this.load.image('keydesk', './assets/Deskpotbroken.png');
    }

    create () {
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.add.image(0, 0, 'keydesk').setOrigin(0);
        this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the vase').setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
    
}