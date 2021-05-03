// Fly prefab
class Fly extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.points= pointValue;
        this.moveSpeed= 2;
    }

    update(time, delta){
        let deltaMultiplier = (delta/16.66667);     // Ethan Rafael's framerate decoupling
        this.x -= this.moveSpeed * deltaMultiplier;

        if(this.x <= 0- this.width){
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}