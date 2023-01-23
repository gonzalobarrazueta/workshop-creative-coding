const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#d0f4de';
    context.fillRect(0, 0, width, height);

    // circles
    context.beginPath();
    // center of the circle (x; y)
    context.arc(width / 2, height / 2, 400, 0, Math.PI * 2, false);
    context.fillStyle = '#a9def9';
    context.fill();
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();
  };
};

canvasSketch(sketch, settings);
