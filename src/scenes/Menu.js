class Menu extends Phaser.Scene {
    constructor() {
        super("menuscene");
    }

    preload() {
        this.load.audio('jump', './assets/jump.mp3');
        this.load.audio('menu', './assets/menu.mp3');
        this.load.audio('hit', './assets/flowerhit.mp3');
        this.load.audio('eat', './assets/eat.mp3');
        this.load.audio('music', './assets/PlaySong.mp3');
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

        this.add.text(borderUISize + borderPadding - 20, borderUISize + borderPadding + 100, 'Catch flies to maintain hunger meter', menuConfig);

        this.add.text(borderUISize + borderPadding - 20, borderUISize + borderPadding + 150, 'Avoid hitting the flower by jumping', menuConfig);

        this.add.text(borderUISize + borderPadding - 20, borderUISize + borderPadding + 200, 'Press [SPACE] to Jump', menuConfig);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            game.settings = {
              highScore: 0
            }
            this.sound.play('menu');
            this.scene.start('playScene')
        }
    }
}