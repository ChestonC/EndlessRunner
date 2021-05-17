// Frog Prefab
class Frog extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.sfx = scene.sound.add('jump');
        this.jumping = false;
        this.moveSpeed = 100;
    }

    preload() {
        this.load.audio('jump', './assets/jump.mp3');
    }

    update(time, delta) {
        let deltaMultiplier = (delta/16.66667);     // Ethan Rafael's framerate decoupling
        
        // jumping
        if(!this.jumping) {
            if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
                this.jumping = true;
                this.sfx.play();
            }
        }

        if(this.jumping) {
            this.moveSpeed -= this.y/175
            this.setFrame(1);
            if(this.y >= game.config.height - borderUISize*2 + 1) {
                this.jumping = false;
                this.moveSpeed = 100;
                this.y = game.config.height - borderUISize*2;
                this.setFrame(0);
            }
            this.y -= this.moveSpeed * deltaMultiplier;
        }
    }
}