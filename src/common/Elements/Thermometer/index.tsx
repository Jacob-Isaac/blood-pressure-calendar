import React from "react";
import astronaut from "../../images/ThermometerFull.gltf";
// import iosAstronaut from "../../../images/Astronaut.usdz"
import { Model, GlobalStyle, HotspotButton } from "./styled";
// import './style.css';
import "@google/model-viewer";
import { useSelector, useDispatch } from "react-redux";
import { selectPressures } from "../../../components/Slice/Slice";
import { Task } from "../../interfaces";
import { useCalculateAverage } from "../../Hooks/summaryHooks";
import { useModelHook } from "../../Hooks/modelHook";
import { useEffect } from "react";
import { showAverage } from "../../../components/Slice/Slice";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}
interface AstronautProps {
  color: any;
  position:any;
  annotation: any;
}



const Globe: React.FC<AstronautProps> = ({ color, position, annotation }) => {


  return (
    <>
      <GlobalStyle />
      <Model>
        <model-viewer
          id="orbit-demo"
          interpolation-decay="200"
          src={color}
          // ios-src={iosAstronaut}
          alt="A 3D model of an astronaut"
          camera-controls
          poster="poster.webp"
          min-camera-orbit="auto 90deg auto"
          max-camera-orbit="auto 90deg auto"
          ar
          ar-modes="webxr scene-viewer quick-look"
          disable-zoom
          touch-action="pan-y"
          //shadow-intensity="1"
          disable-tap
          disable-pan
          // auto-rotate
        >
          {" "}
          <HotspotButton
            className="hotspot"
            slot="hotspot-1"
            data-position={position}
            data-normal="0m 0m 1m"
            data-visibility-attribute="visible"
          >
            <div className="hotspotAnnotation">
              {annotation}
            </div>
          </HotspotButton>
        
          {/* <button className="view-button" slot="hotspot-0" data-position="-0.0569m 0.0969m -0.1398m" data-normal="-0.5829775m 0.2863482m -0.7603565m" data-orbit="-50.94862deg 84.56856deg 0.06545582m" data-target="-0.04384604m 0.07348397m -0.1213202m">
        The Fighters
      </button> */}
          {/* <button slot="ar-button" id="ar-button">
        View in your space
    </button> */}
          {/* <div id="ar-prompt">
            <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
          </div> */}
        </model-viewer>
      </Model>
    </>
  );
};
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
