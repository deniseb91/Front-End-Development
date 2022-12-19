const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
  dimensions: [ 1080, 1080 ]
  //animate: true
};

/*const degToRad = function (degrees){
  return degrees/180 * Math.PI;
}; 

const randomRange = function (min, max) {
  return Math.random() * (max - min) + min;
};*/

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle='red';
 

    //different x and y for each shape, the circle gets its own x and y too, which is cx and cy
    /*to make only a quarter visible adjust the cx and cy
    upper left cx = width * 0 ; cy = height * 0
    upper right cx = width * 1; cy = height * 0
    bottom left cx = width * 0 ; cy = height * 1
    bottom right cx = width * 1; cy = height * 1
    center cx = width * 0.5; xy = height * 0.5
    */
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.4;
    //declare x and y again, with let, because we will modify the values inside the loop
    let x, y;

    //num is amount of copies, if the amount gets really high (>100) the result becomes almost pixelated
    const num = 50;
    //radius is the size of the clock or pizza, distance to center
    const radius = width * 0.34;

    for (let i=0; i < num; i++){
      //slice is size of the 'pizza' slice
      const slice = math.degToRad(360/num);
      //calculate the angle
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
      const line = new Line(100, 100, 10, 10)
      context.save();
      context.translate(x,y);
      context.rotate (-angle);
      context.scale(random.range(.1,2),random.range(0.2, 0.5));

      context.beginPath();
      context.rect(line.x, line.y, line.w, line.h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
    
      context.lineWidth = random.range(2,20);
      context.strokeStyle = 'limegreen';

      context.beginPath();
      // the arc is drawn starting at each shape if sAngle is 0, if the sAgnle is negative, the drawing will start before the drawing of the shape
      //randomize de radius, de sAngle and eAngle
      context.arc(0, 0, radius * random.range(0.4, 1.3), slice * random.range(1,-5), slice * random.range(1, 5));
      context.stroke();

      context.restore();
       
      //extra: yellow circles
      /*context.save();
      context.translate(cx, cy);
      context.rotate(-angle);*/
      /* adding scale to the arc strokes makes them warped
      context.scale(random.range(.5,1), random.range(.5,1));*/
      
      /*context.lineWidth = random.range(1, 10);
      context.strokeStyle = 'yellow';

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.2, 1.5), slice *random.range(2, -4), slice * random.range(2,4));
      context.stroke();

      context.restore();*/


      //extra: add orange circles
      /*context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      context.lineWidth = random.range(1, 10);
      context.strokeStyle = 'orange';

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.001, 1.5), slice *random.range(2, -4), slice * random.range(2,4));
      context.stroke();

      context.restore();*/
    }
  };
};

canvasSketch(sketch, settings);

class Line {
  constructor(x, y, wl, hl){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

class AgentLine {
  constructor(w, h){
    this.width = new Line (w,h);

  }
}