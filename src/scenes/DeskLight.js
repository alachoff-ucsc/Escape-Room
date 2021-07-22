class DeskLight extends Phaser.Scene {
    constructor() {
        super("deskLightScene");
    }

    preload () {
        this.load.image('paintingLight2', './assets/paintingLight.png');
        this.load.image('potdesk', './assets/Newdeskpot.png');
        this.load.image('keydesk', './assets/Deskpotbroken.png');
        this.load.image('darkdesk', './assets/newdeskpotdark.png');
    }

    create (data) {
        this.l = data.l
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        if (this.l==0) {
            this.add.image(0, 0, 'potdesk').setOrigin(0);
            this.add.text(centerX, game.config.height - 20, 'The vase is glued to the table').setOrigin(0.5);
        }
        if (this.l==1) {
            this.add.image(0, 0, 'darkdesk').setOrigin(0);
            this.add.text(centerX, game.config.height - 20, 'The vase is glued to the table').setOrigin(0.5);
        }
        console.log(this)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
    
}