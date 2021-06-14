import{clearCanvas, resizeCanvas, mousePosition}from './modules/util.js';
import Face from './modules/clases.js';
import Mask from './modules/clases.js';
import {drawEyes} from './modules/clases.js';


let imageFace = 'https://i.ibb.co/CVfPFkm/sin-eyes.png';
let imageMask = 'https://i.ibb.co/DGLwq0N/mascara.png';

let face = new Face(imageFace)
let mask = new Mask(imageMask)

function render() {
    clearCanvas();
    face.draw();
    drawEyes()
    mask.draw();
    
}

function onResize() {
    resizeCanvas();
    render();
}

function onMouseMove(event) {
    mousePosition.x = event.offsetX;
    mousePosition.y = event.offsetY;
    render();
}


function main() {
    resizeCanvas();
    render();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
}
window.addEventListener('load', main);