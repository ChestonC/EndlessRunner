class Flower extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points= pointValue;
<<<<<<< Updated upstream
        this.moveSpeed= 2;
=======
<<<<<<< HEAD
        this.moveSpeed= 4;
=======
        this.moveSpeed= 2;
>>>>>>> 8427f31fbb094c76c80916f768e2cf888c4e4001
>>>>>>> Stashed changes
    }

    update(){
        this.x -= this.moveSpeed;

        if(this.x <= 0- this.width){
            this.reset();
        }
    }

    reset() {
        this.x= game.config.width;
    }
}