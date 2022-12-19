const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const Tweakpane = require('tweakpane');


const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const params = {
  cols: 10,
  rows: 10,
  scaleMin: 1,
  scaleMax: 30,
  freq: -0.001,
  amp: 0.2,
  frame: 0, 
  animate: true,
  lineCap: 'round',
}
//gradient


const sketch = () => {
  return ({ context, width, height, frame }) => { 
    const fill = context.createLinearGradient(0, 0, width, height);
    fill.addColorStop(0, 'lime');
    fill.addColorStop(1, 'purple');

    context.fillStyle = fill;
    context.fillRect(0, 0, width, height);

    const cols = params.cols;
    const rows = params.rows;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows; 
    const margx = (width - gridw) * 0.5;
    const margy = (height-gridh) * 0.5;


    //go over each cell of the grid, % = remainderoperator and results in values for cols 0-3
    //this is used to calculate the x value
    /* 0 % 4 = 0
    1 % 4 = 1
    2 % 4 = 2
    3 % 4 = 3
    4 % 4 = 0
    5 % 4 = 1
    6 % 4 = 2
    7 % 4 = 3
    8 % 4 = 0
    */

    // row: every four steps(cells) the value is increased by one, because it is one row down. Math.floor rounds down to the lowest closest integer.
    //this is used to calculate the y value
    /* 0 / 4 = 0
    1 /  4 = 0.25 Math.floor(1/4) = 0
    Math.floor(2 / 4) = 0
    Math.floor(3 / 4) = 0 
    Math.floor(4 / 4) = 1
    Math.floor(5 / 4) = 1
    Math.floor(6 / 4) = 1
    Math.floor(7 / 4) = 1
    Math.floor(8 / 4) = 2
    */
    for (i = 0; i < numCells; i++){
      const col = i % cols;
      const row = Math.floor(i / cols);
    
      const x = col * cellw; 
      const y = row * cellh;
      const w = cellw * 0.8;
      const h = cellh * 0.8; 

      //if params.animate is true, then frame applies, if it is false then params.frame applies
      const f = params.animate ? frame : params.frame;

      // const n = random.noise2D(x + frame*10, y, params.freq);
      const n = random.noise3D(x, y, f*10, params.freq);
      const angle = n * Math.PI * params.amp;
      const scale = math.mapRange(n, -1, 1, params.scaleMin, params.scaleMax);

      context.save();
      //every line has their own x and y, therefore use translate(x, y)
      context.translate(x, y);
      //correct drawing location for margins
      context.translate(margx, margy);
      //correct we're drawing from the center of each cell, but we're only translating the origin to the top left of each cell
      //translate to the center of the cell too
      context.translate(cellw * 0.5, cellh * 0.5);
      //you could add these changes to the translate x and y at once, but by doing it in three steps it is a little more clear what each step does
      context.rotate(angle);

      context.lineWidth = scale;
      context.strokeStyle = 'white';
      context.lineCap = params.lineCap;
      
      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0)
      context.stroke();
      context.restore();
    }


  };
};

const createPane = () => {
  const pane = new Tweakpane.Pane();
  let folder;

  folder = pane.addFolder({ title: 'Grid'});
  folder.addInput(params, 'lineCap', { options: { butt: 'butt', round: 'round', square: 'square'}});
  folder.addInput(params, 'cols', { min: 2, max: 50, step: 1 });
  folder.addInput(params, 'rows', { min: 2, max: 50, step: 1 });
  folder.addInput(params, 'scaleMin', { min: 1, max: 100 });
  folder.addInput(params, 'scaleMax', { min: 1, max: 100 });

  folder = pane.addFolder({title: 'Noise'});
  folder.addInput(params, 'freq', { min: -0.01, max: 0.01});
  folder.addInput(params, 'amp', { min: 0, max: 1});
  folder.addInput(params, 'animate');
  folder.addInput(params, 'frame', { min: 0, max: 999});

};


createPane();
canvasSketch(sketch, settings);
