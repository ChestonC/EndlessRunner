class Menu extends Phaser.Scene {
    constructor() {
        super("menuscene");
    }

    create() {
        // menu text config
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '26px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }


        // PLACEHOLDER text
        this.add.text(borderUISize + borderPadding, borderUISize + borderPadding, 'Pond Rush', menuConfig);

        this.add.text(borderUISize + borderPadding, borderUISize + borderPadding + 50, 'Press → to Start', menuConfig);


        //this.scene.start('playScene');

        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){

        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            game.settings = {
              highScore: 0
            }
            this.scene.start('playScene')
        }









    }
}