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

        this.scene.start('playScene');
    }

    update(){

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode 60 second
            game.settings = {
              highScore: 0
            }
        }









    }
}