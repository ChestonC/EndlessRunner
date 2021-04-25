class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images and sprites
        this.load.image('water1', './assets/water.png');
        this.load.image('water2', './assets/water2.png');
        this.load.image('water3', './assets/water3.png');
        this.load.image('frog1', './assets/frog.png');
        this.load.image('frog2', './assets/frogtongue.png');
    }

    create() {
        // add water1 sprite
        this.water1 = this.add.tileSprite(
            0,
            game.config.height/2,
            616,
            480,
            'water1'
        ).setOrigin(0, 0);

        // add player frog
        this.frog = new Frog(
            this,
            borderUISize+borderPadding,
            game.config.height - borderUISize*2,
            'frog1',
            'frog2',
        )
    }

    update() {
        this.water1.tilePositionX +=4;
    }
}