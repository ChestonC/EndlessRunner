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
        this.add.text(borderUISize + borderPadding, borderUISize + borderPadding, 'ENDLESS RUNNER', menuConfig);

        this.scene.start('playScene');
    }
<<<<<<< Updated upstream
=======
<<<<<<< HEAD

    update() {
        game.settings = {
            flySpeed: 3,
            gameTimer: 60000,    
          }
    }
=======
>>>>>>> 8427f31fbb094c76c80916f768e2cf888c4e4001
>>>>>>> Stashed changes
}