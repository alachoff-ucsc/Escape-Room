class Clock extends Phaser.Scene {
    constructor() {
        super("clockScene");
    }
      // add object to existing scene
      preload () {
        this.load.image('clockdoor', './assets/ClockDoor.png')
        this.load.image('clockdooropen', './assets/ClockDoorOpen.png')
        this.load.image('clockdoordark', './assets/ClockDoorDark.png');
        this.load.image('clockdoordark8', './assets/ClockDoorDark8.png');
    }
    
    create (data) {
        this.x = data.x
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

        if (this.x==1) {    // locked, lights on
            this.add.image(0, 0, 'clockdoor').setOrigin(0);
        }
        if (this.x==2) {    // locked, lights off
            this.add.image(0, 0, 'clockdoordark').setOrigin(0);
        }
        if (this.x==3) {    // unlocked, lights on
            this.add.image(0, 0, 'clockdooropen').setOrigin(0);
        }
        if (this.x==4) {    // unlocked, lights off
            this.add.image(0, 0 , 'clockdoordark8').setOrigin(0);
        }
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
  
}