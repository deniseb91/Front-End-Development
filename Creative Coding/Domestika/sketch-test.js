const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080,1080 ]
};

const randomRange = (min, max) =>{
  return Math.random() *(max-min)+min;
}

let colors = ['blue', 'red', 'green'];
let col = randomRange(0, colors.length);
let c = Math.round(col);
const color = colors[c];
console.log(color);


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    const x = width/2;
    const y = height/2;
    const w = width * .4;
    const h = height * .4;

    context.fillStyle = color;
    context.translate(x, y);

    context.beginPath();
    context.rect(-w*0.5, -h*0.5, w, h);
    context.fill();
  };
};


canvasSketch(sketch, settings);
