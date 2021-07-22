class Win extends Phaser.Scene {
    constructor() {
        super("winScene");
    }

    preload() {
        this.load.image('black', './assets/black.png');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '16px',
            backgroundColor: '#800000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0   
        }

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.sound.stopAll();
        this.sound.play('doorOpen');
    
        this.add.text(game.config.width/2, 100, 'YOU ESCAPED', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 150, 'Programming -- Jalen Pastor', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 200, 'Audio -- Asher Lachoff', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 250, 'Visual Assets -- Ryan Palmberg', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 320, 'Press SPACE to return to main menu', menuConfig).setOrigin(0.5);

    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.stop();
            this.scene.start('menuScene');
        }
    }
}