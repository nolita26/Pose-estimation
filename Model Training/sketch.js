let brain;

function setup() {
  createCanvas(640, 480);
  let options = {
    inputs: 34,
    outputs: 2,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);
  brain.loadData('data.json', dataReady);
}

function dataReady() {
  brain.normalizeData();
  brain.train({epochs: 90}, finished); 
}

function finished() {
  console.log('Model trained!!!');
  //brain.save();
}