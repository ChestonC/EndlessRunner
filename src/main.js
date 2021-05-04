/*
Froggy Endless Runner
By Cheston, Israel, Justin, and Tony
Using Ethan Rafael's framerate decoupling
Sound effects by www.fesliyanstudios.com
5/3/2021
In this game we used a mechanic of having a hunger meter and having the length of the game revolve around it.
On the programming side, we implemented framerate decoupling to fix issues that occur for people with high refresh rate moniters.
We used a combination of pixel art and digitally drawn art for the visuals and had a song made by one of us.
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


let keySPACE;