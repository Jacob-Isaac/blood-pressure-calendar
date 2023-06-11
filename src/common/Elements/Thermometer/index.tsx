import React from 'react';
import astronaut from "../../images/Thermometerr.gltf";
// import iosAstronaut from "../../../images/Astronaut.usdz"
import { Model } from "./styled";
// import './style.css';
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const Globe: React.FC = () => (
  <Model>
    <model-viewer
      id="orbit-demo"
      interpolation-decay="200"
      src={astronaut}
      // ios-src={iosAstronaut}
      alt="A 3D model of an astronaut"
      camera-controls
      min-camera-orbit="auto 90deg auto"
      max-camera-orbit="auto 90deg auto"
      ar
      disable-zoom
      touch-action="pan-y"
      //  shadow-intensity="1"
      disable-tap
      disable-pan
      // auto-rotate
    >
      {/* <button class="view-button" slot="hotspot-0" data-position="-0.0569m 0.0969m -0.1398m" data-normal="-0.5829775m 0.2863482m -0.7603565m" data-orbit="-50.94862deg 84.56856deg 0.06545582m" data-target="-0.04384604m 0.07348397m -0.1213202m">
        The Fighters
      </button> */}
    </model-viewer>
  </Model>
);

export default Globe;



// import * as fs from 'fs';

// // Read the glTF file
// const gltfData = fs.readFileSync('path/to/your/file.gltf', 'utf8');
// const gltf = JSON.parse(gltfData);

// // Find the node you want to modify
// const nodeName = "2"; // Name of the node you want to change

// // Find the node by name
// const node = gltf.nodes.find((n) => n.name === nodeName);

// // Modify the "baseColorFactor" property for the specific node
// if (node && node.pbrMetallicRoughness && node.pbrMetallicRoughness.baseColorFactor) {
//   node.pbrMetallicRoughness.baseColorFactor = [1, 0, 0, 1]; // Set the desired baseColorFactor values
// }

// // Write the modified glTF back to the file
// fs.writeFileSync('path/to/your/modified-file.gltf', JSON.stringify(gltf));

// colors : 
// 0.17225027084350586, red
// 0.8000000715255737,  green
// 0.04794622212648392,  blue

// https://www.colorhexa.com


// import * as fs from 'fs';

// // Read the glTF file
// const gltfData = fs.readFileSync('path/to/your/file.gltf', 'utf8');
// const gltf = JSON.parse(gltfData);

// // Find the nodes you want to modify
// const nodeNames = ["1", "4"]; // Names of the nodes you want to change

// // Modify the "baseColorFactor" property for the specific nodes
// for (const nodeName of nodeNames) {
//   const node = gltf.nodes.find((n) => n.name === nodeName);
//   if (node && node.pbrMetallicRoughness && node.pbrMetallicRoughness.baseColorFactor) {
//     node.pbrMetallicRoughness.baseColorFactor = [1, 0, 0, 1]; // Set the desired baseColorFactor values
//   }     ->> mozna jeszcze tu cos probowac 
// if (node && node.pbrMetallicRoughness && node.pbrMetallicRoughness.baseColorFactor) {
//   node.pbrMetallicRoughness.baseColorFactor = [
//     [1, 0, 0, 1], // Set the desired first baseColorFactor values
//     [0, 1, 0, 1], // Set the desired second baseColorFactor values
//   ];
// }

// // Write the modified glTF back to the file
// fs.writeFileSync('path/to/your/modified-file.gltf', JSON.stringify(gltf));