// Frog Prefab
class Frog extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture1, texture2, frame) {
        super(scene, x, y, texture1, texture2, frame);
        scene.add.existing(this);
        
        this.tongue = false;
    }

    update() {

    }
}