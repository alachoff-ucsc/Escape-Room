class DeskBroken extends Phaser.Scene {
    constructor() {
        super("deskBrokenScene");
    }

    preload () {
        this.load.image('paintingLight2', './assets/paintingLight.png');
        this.load.image('potdesk', './assets/Deskpot.png');
        this.load.image('keydesk', './assets/Deskpotbroken.png');
        this.load.image('nokey', './assets/Newdeskpotxkey.png');
        this.load.image('number5', './assets/Newdeskpot7.png')
    }

    create (data) {
        this.k = data.k;
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        if (this.k == 0){
            this.add.image(0, 0 , 'keydesk').setOrigin(0);
            this.add.text(centerX, game.config.height - 20, 'The light of the lens cracked the exterior').setOrigin(0.5);
        }
        if (this.k==1) {
            this.add.image(0, 0 , 'nokey').setOrigin(0);
        }
        if (this.k==2) {
            this.add.image(0, 0 , 'number5').setOrigin(0);
        }
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
    
}