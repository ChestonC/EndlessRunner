class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // Load images and sprites
        this.load.image('floor', './assets/Lilypads.png');
        this.load.image('water1', './assets/Water.png');
        this.load.image('water2', './assets/Water2.png');
        this.load.image('water3', './assets/Water3.png');
        this.load.image('frogrun', './assets/frog.png');
        this.load.image('fly', './assets/fly.png');
        this.load.image('flower', './assets/flower.png');
    }

    create() {
        // Add sky bg
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x00DDFF).setOrigin(0, 0);

        // Add water1 sprite
        this.water1 = this.add.tileSprite(
            0,
            game.config.height/2,
            616,
            480,
            'water1'
        ).setOrigin(0, 0);

        // Add floor
        this.floor = this.add.tileSprite(
            borderUISize + borderPadding - 40,
            game.config.height - borderUISize*2 + 12,
            616,
            480,
            'floor'
        ).setOrigin(0, 0);

        // Add player frog
        this.frog = new Frog(
            this,
            borderUISize + borderPadding,
            game.config.height - borderUISize*2,
            'frogrun',
        );

        // Add flower obstacle
        this.flower = new Flower(
            this,
            borderUISize + borderPadding + 700,
            game.config.height - borderUISize*2,
            'flower',
            0
        );

        this.flower2= new Flower(
            this,
            borderUISize+borderPadding + 700,
            game.config.height - borderUISize*2,
            'flower',
            0
        );

        this.fly = new Fly(
            this, 
            game.config.width, 
            borderUISize*6 + borderPadding*8, 
            'fly', 
            0, 
            10
        ).setOrigin(0, 0);
        
        // Display hunger meter
        this.startTime = this.time.now;
        this.hunger = 150;
        this.add.rectangle(game.config.width/3, game.config.height/3, 206, 26, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle((game.config.width/3) + 3, (game.config.height/3) + 3, 200, 20, 0x00DDFF).setOrigin(0, 0);
        this.hungerMeter = this.add.rectangle((game.config.width/3) + 3, (game.config.height/3) + 3, this.hunger, 20, 0xFF5500).setOrigin(0, 0);

        // Initialize score
        this.frogScore = 0;

        // Display score config
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

        // Display score
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.frogScore, scoreConfig);

        // Display highscore config
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

        // Display high score
        //console.log(game.settings.highScore);
        this.scoreRight = this.add.text(350, borderUISize + borderPadding*2, 'High Score: ' + game.settings.highScore, highscoreConfig);

        // Update high score
        if(game.settings.highScore < this.frogScore) {
            game.settings.highScore = this.frogScore;
            this.scoreRight.text = 'High Score: ' + game.settings.highScore;
        }

        // Define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.timer= 15000;

        // Flower respawn timer
        this.respawn = this.time.addEvent({delay: this.timer, callback: this.respawnflower, callbackScope: this, loop: true});
        this.respawn = this.time.addEvent({delay: this.timer-5000, callback: this.respawnflower2, callbackScope: this, loop: true});

        // Game over flag
        this.gameOver = false;
    }

    update(time, delta) {
        let deltaMultiplier = (delta/16.66667);     // Ethan Rafael's framerate decoupling
        if(!this.gameOver) {
            this.water1.tilePositionX += 4 * deltaMultiplier;
            this.floor.tilePositionX += 1 * deltaMultiplier;
            this.flower.update(time, delta);
            this.flower2.update(time, delta);
            this.fly.update(time, delta);
            this.frog.update(time, delta);

            if(this.checkCollision(this.frog, this.fly)) {
                this.fly.reset();
                this.hunger += 30
                this.flyEaten(this.fly);
            }

            if(this.checkCollision(this.frog, this.flower)){
                if(this.flower.alpha == 0){
                    this.flower.reset();
                } else{
                this.flower.reset();
                this.flower.alpha = 0;
                this.hunger -= 10;
                console.log('flower1 hit');
                this.cameras.main.shake(250, .008);
                this.sound.play('hit');
                }
            }

            if(this.checkCollision(this.frog, this.flower2)){
                if(this.flower2.alpha == 0) {
                    this.flower2.reset();
                } else{
                this.flower2.reset();
                this.flower2.alpha = 0;
                this.hunger -= 10;
                console.log('flower2 hit');
                this.cameras.main.shake(250, .008);
                this.sound.play('hit');
                }
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

    flyEaten(fly) {
        this.frogScore += fly.points;
        this.scoreLeft.text = this.frogScore;
    }

    // Add collision with flower
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

    // Add respawn function for flower
    respawnflower() {
        this.flower = new Flower(
            this,
            borderUISize+borderPadding + 700,
            game.config.height - borderUISize*2,
            'flower',
            0
        );
        console.log('spawning flower');
    }

    respawnflower2() {
        this.flower2 = new Flower(
            this,
            borderUISize+borderPadding + 700,
            game.config.height - borderUISize*2,
            'flower',
            0
        );
        console.log('spawning flower2');
    }

    // Update the hunger meter
    updateHunger() {
        this.hunger -= 0.05;
        if (this.hunger >= 200) {
            this.hunger = 200;
        }
        this.hungerMeter.width = this.hunger;
        if (this.hunger <= 0) {
            this.gameOver = true;
        }
    }
}