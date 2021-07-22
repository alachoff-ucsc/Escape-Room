class Clock extends Phaser.Scene {
    constructor() {
        super("Clock");
    }
      // add object to existing scene
      preload () {
        this.load.image('clockdoor', './assets/ClockDoor.png')
        this.load.image('clockdooropen', './assets/ClockDoorOpen.png')
        this.load.image('clockdoordark', './assets/ClockDoorDark.png');
        this.load.image('clockdoordark2', './assets/ClockDoorDark2.png');
        this.load.image('clockdoordark3', './assets/ClockDoorDark3.png');
        this.load.image('clockdoordark8', './assets/ClockDoorDark8.png');
    }
    
    create (data) {
        this.x = data.x
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

        if (this.x == 0){
            this.add.image(0, 0 , 'clockdoordark2').setOrigin(0);
        }
        if (this.x==1) {
            this.add.image(0, 0 , 'clockdoordark3').setOrigin(0);
        }
        if (this.x==2) {
            this.add.image(0, 0 , 'clockdoordark8').setOrigin(0);
        }
        if (this.x==3) {  
            this.add.image(0, 0, 'clockdoor').setOrigin(0);
        }
        if (this.x==4) {
            this.add.image(0, 0, 'clockdoordark').setOrigin(0);
        }
        if (this.x==5) {
            this.add.image(0, 0, 'clockdooropen').setOrigin(0);
        }
        
        // console.log(this)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.stop();
            this.scene.resume('playScene');
        }
    }
  
}