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
        this.load.image('frogrun', './assets/frogrun.png');
        this.load.image('frogjump', './assets/frogjump.png');
        this.load.image('fly', './assets/fly.png');
        this.load.image('frog2', './assets/frogtongue.png');
        this.load.image('flower', './assets/Flower obstacle.png');
        this.load.image('fly', './assets/fly.png');
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
            (game.config.height - borderUISize*2)-1,
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

        this.flower2= new Flower(
            this,
            borderUISize+borderPadding+ 700,
            game.config.height - borderUISize*2,
            'flower',
            0, 30
        );

        this.fly = new Fly(this, game.config.width, borderUISize*6 + borderPadding*8, 'fly', 0, 10).setOrigin(0,0);
        
        //Display hunger meter
        this.startTime = this.time.now;
        this.hunger = 150;
        this.add.rectangle(game.config.width/3, game.config.height/3, 206, 26, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle((game.config.width/3)+3, (game.config.height/3)+3, 200, 20, 0x00DDFF).setOrigin(0, 0);
        this.hungerMeter = this.add.rectangle((game.config.width/3)+3, (game.config.height/3)+3, this.hunger, 20, 0xFF5500).setOrigin(0, 0);

        //initialize score
        this.frogScore = 0;

        // display score config
        let scoreConfig = {
                fontFamily: 'Courier',
                fontSize: '28px',
                backgroundColor: '#83D6FF',
                color: '#843605',
                align: 'right',
                padding: {
                    top: 5,
                    bottom: 5,
                },
                fixedWidth: 100
        }
        //display score
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.frogScore, scoreConfig);

        //display highscore config
        let highscoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#83D6FF',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 250
        }

        this.highScore = 0;

        //display high score
        //console.log(game.settings.highScore);
        this.scoreRight = this.add.text(350, borderUISize + borderPadding*2, 'High Score: ' + game.settings.highScore, highscoreConfig);

         //update high score
         if(game.settings.highScore<this.frogScore){
            game.settings.highScore = this.frogScore;
            this.scoreRight.text = 'High Score: ' + game.settings.highScore;
        }

        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);

        this.timer= 15000;

        //added respawn timer
        this.respawn=  this.time.addEvent({delay: this.timer, callback: this.respawnflower, callbackScope: this, loop: true});
        this.respawn=  this.time.addEvent({delay: this.timer-5000, callback: this.respawnflower2, callbackScope: this, loop: true});

        // game over flag
        this.gameOver = false;
    }

    update() {
        if(!this.gameOver) {
            this.water1.tilePositionX +=4;
            this.floor.tilePositionX +=1;
            this.flower.update();
            this.flower2.update();
            this.fly.update();
            this.frog.update();

            if(this.checkCollision(this.frog, this.fly)) {
                this.fly.reset();
                this.hunger += 50
            }

            if(this.checkCollision(this.frog, this.flower)){
                this.flower.destroy();
            }

            if(this.checkCollision(this.frog, this.flower2)){
                this.flower2.destroy();
            }

            this.updateHunger()
        }
    }

    checkCollision(frog, fly) {
        if (frog.x < fly.x + fly.width && 
            frog.x + frog.width > fly.x && 
            frog.y < fly.y + fly.height &&
            frog.height + frog.y > fly.y) {
                return true;
        } else {
            return false;
        }
    }

    //add collision with flower
    checkCollision(frog, flower) {
        if (frog.x < flower.x + flower.width && 
            frog.x + frog.width > flower.x && 
            frog.y < flower.y + flower.height &&
            frog.height + frog.y > flower.y) {
                return true;
        } else {
            return false;
        }
    }

    //add respawn function for flower

    respawnflower() {
        this.flower= new Flower(
            this,
            borderUISize+borderPadding+ 700,
            game.config.height - borderUISize*2,
            'flower',
            0, 30
        );
        console.log('spawning flower');
    }

    respawnflower2() {
        this.flower2= new Flower(
            this,
            borderUISize+borderPadding+ 700,
            game.config.height - borderUISize*2,
            'flower',
            0, 30
        );
        console.log('spawning flower2');
    }

    // update the hunger meter
    updateHunger() {
        this.hunger -= 0.1;
        if (this.hunger >= 200) {
            this.hunger = 200;
        }
        this.hungerMeter.width = this.hunger;
        if (this.hunger <= 0) {
            this.gameOver = true;
        }
    }
}