class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.moveSpeed = 0.7;
    }

    update() {
        // vertical and horizontal movement
        if (keyLEFT.isDown && this.x >= 0) {
            this.x -= this.moveSpeed;
        }
        else if (keyRIGHT.isDown && this.x <= game.config.width) {
            this.x += this.moveSpeed;
        }
        else if (keyUP.isDown && this.y >= backWall) {
            this.y -= this.moveSpeed;
        }
        else if (keyDOWN.isDown && this.y <= game.config.height) {
            this.y += this.moveSpeed;
        }
    }
}