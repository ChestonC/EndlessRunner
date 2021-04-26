class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images and sprites
        this.load.image('floor', './assets/Lilypads.png');
        this.load.image('water1', './assets/water.png');
        this.load.image('water2', './assets/water2.png');
        this.load.image('water3', './assets/water3.png');
        this.load.image('frog1', './assets/frog.png');
        this.load.image('fly', './assets/fly.png');
        this.load.image('frog2', './assets/frogtongue.png');
        this.load.image('flower', './assets/Flower obstacle.png');
    }

    create() {
        // add sky bg
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x00DDFF).setOrigin(0, 0);
        // add water1 sprite
        this.water1 = this.add.tileSprite(
            0,
            game.config.height/2,
            616,
            480,
            'water1'
        ).setOrigin(0, 0);

        //add floor
        this.floor = this.add.tileSprite(
            borderUISize+ borderPadding-40,
            game.config.height - borderUISize*2+ 12,
            616,
            480,
            'floor'
        ).setOrigin(0,0)

        // add player frog
        this.frog = new Frog(
            this,
            borderUISize+borderPadding,
            game.config.height - borderUISize*2,
            'frog1',
            'frog2',
        )

        // add flower obstacle
        this.flower= new Flower(
            this,
            borderUISize+borderPadding+ 700,
            game.config.height - borderUISize*2,
            'flower',
            0, 30
        );

        this.fly= new Fly(
            this,
            borderUISize+borderPadding+ 700,
            game.config.height - borderUISize*2,
            'fly',
            0, 30
        );
       
    }

    update() {
        this.water1.tilePositionX +=4;
        this.floor.tilePositionX +=1;
        this.flower.update();
    }
}