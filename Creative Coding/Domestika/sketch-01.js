const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080], 
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width *0.005;
        
    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.025;
    //ix and iy are initial x and initial y 
    const ix = width * 0.2;
    const iy = height * 0.2;

    //offset variable to 0ffset the inner rectangles
    const off = width * 0.02;

    let x, y;
    
    for (let i = 0; i<5; i++){
      for (let j = 0; j < 5; j++) {
        let x = ix + (w + gap) * i;
        let y = iy + (h + gap) * j;
        context.beginPath();
        context.strokeStyle = "white";
        context.rect(x, y, w, h);
        context.stroke();
      
        
         if ( Math.random() > 0.5) {
          context.beginPath();
          context.strokeStyle = "orange";
          context.rect(x + off/2, y + off/2, w - off, h - off);
          context.stroke();
         
        }
      }
    }    
  };
};

canvasSketch(sketch, settings);

//Task: write a function
/*let favBands = ['Green Day', 'Fall Out Boy', 'Simple Plan', 'Yellowcard', 'You Me At Six', 'All Time Low', 'Within Temptation' ]

let listArtists = function () {
  for (let i=0; i<=favBands.length; i++){
    console.log(favBands[i]);
  }
}


listArtists()*/