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


        // Menu TEXT
        //need more content, ex: image text color, ext. //Justin
        this.add.text(borderUISize + borderPadding - 20, borderUISize + borderPadding, 'Pond Rush', menuConfig);

        this.add.text(borderUISize + borderPadding + 130, borderUISize + borderPadding + 350, 'Press [SPACE] to Start', menuConfig);

        this.add.text(borderUISize + borderPadding - 20, borderUISize + borderPadding + 100, 'Capture Fly to keep your hunger meter', menuConfig);

        this.add.text(borderUISize + borderPadding - 20, borderUISize + borderPadding + 150, 'Avoid hitting the flower by jumping', menuConfig);

        this.add.text(borderUISize + borderPadding - 20, borderUISize + borderPadding + 200, 'Press [SPACE] to Jump', menuConfig);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            game.settings = {
              highScore: 0
            }
            this.scene.start('playScene')
        }
    }
}