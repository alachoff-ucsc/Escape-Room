class Riddle extends Phaser.Scene {
    constructor() {
        super("riddleScene");
    }

    preload () {
        this.load.image('note', './assets/note.png');
    }

    create() {
        this.note = this.add.image(0, 0, 'note').setOrigin(0);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the note').setOrigin(0.5);

    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
}