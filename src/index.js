import CharacterSpriteCreator from "./CharacterSpriteCreator";
import KeyboardAdapter from "./KeyboardAdapter";

import "./index.scss";

window.onload = () => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    const linkSpritesheetImage = new Image();
    const scene = new Image();
    scene.src = "https://d1u5p3l4wpay3k.cloudfront.net/zelda_gamepedia_en/d/de/Thieves%27_Town.png";

    linkSpritesheetImage.src = "https://image.ibb.co/fFpwvp/link.png";
    const link = new CharacterSpriteCreator(linkSpritesheetImage, canvas);

    linkSpritesheetImage.onload = () => {
        init();
    };

    const update = () => {
        link.walk();
    };

    const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(scene, 0, 0, scene.width, scene.height, 0,0, canvas.width, canvas.height);
        link.draw(context);
    };

    const init = () => {
        updateFrame();
        draw();
    };

    const updateFrame = () => {
        window.requestAnimationFrame(updateFrame, canvas);
        update();
        draw();
    };

    const onKeydown = (event) => {
        link.direction = KeyboardAdapter[event.keyCode];
    };

    const onKeyup = () => {
        link.direction = "none";
    };

    window.addEventListener("keydown", onKeydown, false);
    window.addEventListener("keyup", onKeyup, false);
};


