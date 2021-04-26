/*
Froggy Endless Runner
By Cheston, Israel, Justin, and Tony
Updated 4/24/2021
*/
let config = {
    type: Phaser.AUTO,
    width: 616,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;


let keyW, keyA, keyS, keyD, keyJ;