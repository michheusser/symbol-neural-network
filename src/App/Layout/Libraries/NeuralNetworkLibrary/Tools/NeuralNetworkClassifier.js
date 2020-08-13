import NeuralNetworkTool from "./NeuralNetworkTool";

class NeuralNetworkClassifier extends NeuralNetworkTool {
  constructor(outputMap = null) {
    super();
    this.outputMap = outputMap;
  }
  loadOutputMap(outputMap) {
    this.outputMap = outputMap;
    return this;
  }
  classifyGrid(grid) {
    let vectorizedGrid = grid.tools.gridManipulator.gridToArray();
    let neuronOutput = this.network.tools.neuralNetworkActivator.evaluate(
      vectorizedGrid
    );

    let neuronOutputSum = neuronOutput.reduce(function (a, b) {
      return a + b;
    }, 0);

    let likelihood = neuronOutput.map((value) => value / neuronOutputSum);

    let maxIndex = neuronOutput.indexOf(Math.max(...neuronOutput));
    return {
      neuronOutput: neuronOutput,
      likelihood: likelihood,
      prediction: this.outputMap[maxIndex],
      predictionLikelihood: likelihood[maxIndex],
    };
  }
}

export default NeuralNetworkClassifier;