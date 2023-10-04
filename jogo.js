console.log('[RiasDEV] | FlappyGame');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

//[Background]

const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, // Sprite x | Sprite y
            planoDeFundo.largura, planoDeFundo.altura, // Height of the cut in the sprite
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura, 
        );
    },
};

//[Floor]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, // Sprite x | Sprite y
            chao.largura, chao.altura, // Height of the cut in the sprite
            chao.x, chao.y,
            chao.largura, chao.altura,
        );
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, // Sprite x | Sprite y
            chao.largura, chao.altura, // Height of the cut in the sprite
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
        );
    }, 
};

const flappyBird = {  
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, // Sprite x | Sprite y
            flappyBird.largura, flappyBird.altura, // Height of the cut in the sprite
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    }
}

function loop(){
    flappyBird.desenha();
    chao.desenha();

    requestAnimationFrame(loop);
}

loop();