// Flower Prefab
class Flower extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.moveSpeed = 6;
    }

    update(time, delta) {
        let deltaMultiplier = (delta/16.66667);     // Ethan Rafael's framerate decoupling
        this.x -= this.moveSpeed * deltaMultiplier;

        if(this.x <= 0 - this.width) {
            this.destroy();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}