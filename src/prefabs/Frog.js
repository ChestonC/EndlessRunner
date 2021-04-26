// Frog Prefab
class Frog extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture1, texture2, frame) {
        super(scene, x, y, texture1, texture2, frame);

        scene.add.existing(this);
        this.tongue = false;
<<<<<<< Updated upstream
=======
<<<<<<< HEAD


    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP) && !this.tongue) {
            this.tongue = true;
        }
=======
>>>>>>> Stashed changes
    }

    update() {

<<<<<<< Updated upstream
=======
>>>>>>> 8427f31fbb094c76c80916f768e2cf888c4e4001
>>>>>>> Stashed changes
    }
}