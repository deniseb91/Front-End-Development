const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

let text = 'D';
let anothertext = 'B';
let fontSize = 1200;
let fontFamily = 'serif';

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'white';
    //context.font = fontSize + 'px ' + fontfamily; same as with template literals: 
    context.font=`${fontSize}px ${fontFamily}`;
    context.textBaseline= 'top';
    //context.textAlign = 'center';

    
    const metrics = context.measureText(text);
    const mx = metrics.actualBoundingBoxLeft * -1;
    const my = metrics.actualBoundingBoxAscent * -1;
    const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
    const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    const x = (width - mw) * 0.5 - mx;
    const y = (height - mh) * 0.5 - my;
    
        
    //first letter is drawn first, second comes on top. 
    //draw letter B
    let fontsze =800;
   
    context.save();
    context.font=`${fontsze}px ${fontFamily}`;
    
    context.fillStyle='white';
    context.translate(2.2*x,11*y);
    
    context.beginPath();  
    context.fillText(anothertext, 0, 0);
    context.restore();


    //draw letter D
    context.save();
    context.strokeStyle='white';
    context.lineWidth=1;
    context.translate(x, y);

    context.beginPath();
    context.rect(mx, my, mw, mh);
    context.stroke();
    context.fillText(text, 0, 0);
    context.restore();

    

  };
};

canvasSketch(sketch, settings);
