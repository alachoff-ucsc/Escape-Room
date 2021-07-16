class Win extends Phaser.Scene {
    constructor() {
        super("winScene");
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


        this.add.text(game.config.width/2, game.config.height/2, 'YOU ESCAPED', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.5, 'Press SPACE to return to main menu', menuConfig).setOrigin(0.5);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('menuScene');
        }
    }
}