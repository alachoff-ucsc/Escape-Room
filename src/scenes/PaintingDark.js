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
        // this.paint = this.add.image(0, 0, 'paintingDark').setOrigin(0);
        // this.paint2 = this.add.image(0, 0, 'paintingDark2').setOrigin(0);
        // this.paint3 = this.add.image(0, 0, 'paintingDark3').setOrigin(0);
        // this.paint4 = this.add.image(0, 0, 'paintingDark4').setOrigin(0);
        // this.paint5 = this.add.image(0, 0, 'paintingDark5').setOrigin(0);
        this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the picture?').setOrigin(0.5);
        this.creep = 0;
        let creepConfig = {
            fontFamily: 'Georgia',
            fontSize: '35px',
            color: '#F5F5DC',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 100
          }
        this.creepLeft = this.add.text(100, 100, this.creep, creepConfig);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
        // this.creep++;
        // this.displayCreep = Math.floor(this.creep);
        // this.creepLeft.text = this.displayCreep;
        if (this.creep >= 0) {
            this.creep++;
            this.displayCreep = Math.floor(this.creep);
            this.creepLeft.text = this.displayCreep;
            // this.paint = this.add.image(0, 0, 'paintingDark2').setOrigin(0);
            this.creepLeft.text = this.displayCreep;
            // this.paint2 = this.paint.setTexture('paintingDark2');
            // this.paint = this.paint
            this.paint = this.add.image(0, 0, 'paintingDark').setOrigin(0);
        }
        if (this.creep >= 100) {
            // this.add.image(0, 0, 'paintingDark3').setOrigin(0);
            // this.paint3 = this.paint.setTexture('paintingdark3');
            this.paint.destroy();
            this.paint2 = this.add.image(0, 0, 'paintingDark2').setOrigin(0);
            // this.paint = this.paint2
            this.creepLeft.text = this.displayCreep;
        
        }
        if (this.creep >= 200) {
            // this.paint.setTexture('paintingdark4');
            // this.paint3
            // this.add.image(0, 0, 'paintingDark4').setOrigin(0);
            this.paint2.destroy();
            this.paint3 = this.add.image(0, 0, 'paintingDark3').setOrigin(0);
            this.creepLeft.text = this.displayCreep;
        }
        if (this.creep >= 300) {
            // this.paint.setTexture('paintingdark5')
            // this.paint4
            // this.add.image(0, 0, 'paintingDark5').setOrigin(0);
            this.paint3.destroy();
            this.paint4 = this.add.image(0, 0, 'paintingDark4').setOrigin(0);
            this.creepLeft.text = this.displayCreep;
        if (this.creep >= 400) {
            this.paint4.destroy();
            this.paint5 = this.add.image(0, 0, 'paintingDark5').setOrigin(0);
            this.creep = 1000;
            this.add.text(centerX, game.config.height - 20, 'Press C to stop looking at the picture?').setOrigin(0.5);
            // this.paint = this.paint5
        }
        
        }
    }
}