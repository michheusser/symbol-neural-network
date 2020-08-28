# handCalc
handCalc is a handwritten calculator for simple numerical expressions. 
* **Machine Learning based:** handCalc works with a 4-layered neural-network kernel, which has been trained with more than 200'000 handwritten symbols. Since the recognition algorithm is not yet perfect, this tool provides the analysis tools to play and understand better how a neural network may react and change its decision pattern depending on its different inputs and their variations.
* **Custom-made libraries:** The main goal of this project was not to build a complex and sophisticated tool with existing libraries like TensorFlow, Keras, or PyTorch, but rather to create a simple, but functional custom-made tool, using image-processing and neural-network libraries built from scratch in both JavaScript and Python, that are easy to understand and adapt to other projects.
* **Based in React:** The tool was created using React (https://reactjs.org/) on JavaScript, using a straight-forward project structure and component hierarchy, as well as an uncomplicated state management structure and data-flow using Redux (https://redux.js.org/), and a design powered by Material UI (https://material-ui.com/).
* **Future versions:** Currently, handCalc renders components and performs data-processing and machine-learning algorithms directly on the browser, considering they're not particularly ressource-intensive. However for future versions, a server-side API that includes server-side capabilities (based on Java Spring Boot) will be added. Among others, the saving of inputted symbols (dataset augmentation) to a database, and further server-side training of the neural network will be possible. Furthermore, a mobile version will be available optimized for iOS and Android (since currently, the drawing board is not optimized for touch-screens).

## The Projects Architecture in a Nutshell



## The App's Core:
In this section the core capabilities of the app will be discussed in depth, to understand better what the most importan components are doing in the background.
### Machine Learning Kernel
As expected, the machine learning kernel is the app's main capability (and topic, for that matter). The

### Drawing Board Image Processing
Lorem ipsum

## Neural Network Training
### Data Set Creation and Processing
### Training Algorithm

## UI / UX Design:
### Lorem Ipsum

## Component Architecture
### Main Structure

## Libraries Architecture
### Main Structure

## Main Project Folder Structure
```
.public
├── index.html                           # Root html file, where the app is rendered
└── ...                                  # Further icon files / metadata

.src
├── .gitnore                             # git specific file (git-ignored files)
├── package.json                         # npm dependency file
├── package-lock.json                    # npm dependency file
│
├── App                                  # App components (See Component Hierarchy section)
│   └── ...                              
│
├── Assets                               # Various data ressources for the project
│   ├── Media                            # Gif images used for the project
│      └── ... 
│   └── NeuralNetwork                    # Exported neural network data from the training libraries in python
│      ├── SavedNetwork                  # Contains the .json files containing the numerical data for the neural network
│         ├── bias.json                  # Neuron bias data
│         └── weights.json               # Neuron input weights data
│      └── MatrixData.js                 # File compiling data into a JavaScript variables
│
├── Libraries                            # Custom Neural Network and Image processing libraries (See Custom Libraries section)
│   ├── gridTools                        # Grid / Image processing library
│      └── ... 
│   └── nnTools                          # Neural Network library
│      └── ...                           
│
├── storeSetup.js                        # Redux Reducer Setup
└── index.js                             # Root React file rendering the components in the App-folder into the root HTML

```
## Project Launching
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To launch the project and development server, you can use the following script on the project folder:
### **```npm start```** _(Runs the app in the development mode)_

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

To build the project use the following script:
### **```npm run build```** _(Builds the app for production to the 'build' folder)_

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

