class PaintingDark extends Phaser.Scene {
    constructor() {
        super("paintingDarkScene");
    }

    preload () {
        this.load.image('paintingDark', './assets/paintingDark.png');
        this.load.image('paintingDark2', './assets/Scaryface2.png');
        this.load.image('paintingDark3', './assets/Scaryface3.png');
        this.load.image('paintingDark4', './assets/Scaryface4.png');
        this.load.image('paintingDark5', './assets/Scaryface5.png');
        this.load.image('fingers3', './assets/Fingers3.png');
        this.load.image('fingers4', './assets/Fingers4.png');
        this.load.image('fingers9', './assets/Fingers9.png');
    }

    create (data) {
        this.j = data.j
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the picture?').setOrigin(0.5);
        
        // timer
        this.timer = 0;
    }

    update() { 
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    
        if (this.timer == 0) {
            this.paint = this.add.image(0, 0, 'paintingDark').setOrigin(0);
        }
        if (this.timer == 400) {
            this.paint2 = this.add.image(0, 0, 'paintingDark2').setOrigin(0);
        }
        if (this.timer == 700) {
            this.paint3 = this.add.image(0, 0, 'paintingDark3').setOrigin(0);
        }
        if (this.timer == 1000) {
            this.paint4 = this.add.image(0, 0, 'paintingDark4').setOrigin(0);
        }
        if (this.timer == 1300) {
            this.paint5 = this.add.image(0, 0, 'paintingDark5').setOrigin(0);
        }
        if (this.timer == 1450) {

            this.paint8 = this.add.image(0, 0, 'fingers9').setOrigin(0);
            this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the picture?').setOrigin(0.5);
        }
        this.timer++;
    }
}