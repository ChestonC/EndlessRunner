// Frog Prefab
class Frog extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture1, texture2, frame) {
        super(scene, x, y, texture1, texture2, frame);
        scene.add.existing(this);
        
        this.jumping = false;
        this.tongue = false;
        this.moveSpeed = 4;
    }

    preload() {
        this.load.image('frog2', './assets/frogtongue.png');
    }


    update() {

        // jumping
        if(!this.jumping) {
            if(Phaser.Input.Keyboard.JustDown(keyW)) {
                this.jumping = true;
            }
        }

        if(this.jumping) {
            this.moveSpeed -= this.y/6000
            if(this.y >= game.config.height - borderUISize*2) {
                this.jumping = false;
                this.moveSpeed = 4;
                this.y = (game.config.height - borderUISize*2)+3;
            }
            this.y -= this.moveSpeed;
        }

        //firing tongue
        if(keyJ.isDown){
            this.tongue = true;
            //this.frog.setTexture('frog2');
        }


    }
}