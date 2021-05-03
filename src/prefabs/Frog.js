// Frog Prefab
class Frog extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture1, texture2, frame) {
        super(scene, x, y, texture1, texture2, frame);
        scene.add.existing(this);
        
        this.jumping = false;
        this.tongue = false;
        this.moveSpeed = 9;
    }

    preload() {
        this.load.image('frog2', './assets/frogtongue.png');
    }


    update(time, delta) {
        let deltaMultiplier = (delta/16.66667);     // Ethan Rafael's framerate decoupling

        // jumping
        if(!this.jumping) {
            if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
                this.jumping = true;
            }
        }

        if(this.jumping) {
            this.moveSpeed -= this.y/3400
            if(this.y >= game.config.height - borderUISize*2 + 1) {
                this.jumping = false;
                this.moveSpeed = 9;
                this.y = (game.config.height - borderUISize*2);
            }
            this.y -= this.moveSpeed * deltaMultiplier;
        }
    }
}