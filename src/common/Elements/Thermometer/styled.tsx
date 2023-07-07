import styled, {css} from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ButtonHTMLAttributes } from 'react';


export const Model = styled.div`
model-viewer {
    margin-left: -180px;
    width: 600px;
    height: 690px;
}
`;

export const GlobalStyle = createGlobalStyle`
  .hotspot {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    border: none;
    background-color: #141414;
    box-sizing: border-box;
    transition: transfer 0.3s;
  }

  .hotspotAnnotation {
    visibility: hidden;
    background-color: #f3f3f3;
    border: solid;
    position: absolute;
     transform: translate(10px, 10px); 
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    top: -60px; /* Adjust the value as per your needs */
    left: 40px;
    width: 50px; /* Adjusted: Set width to desired size */
    height: 100px; /* Adjusted: Set height to desired size */
    font-size: 9px; /* Adjusted: Set font size to desired size */
    opacity: 0;
    transition: visibility 0s, opacity 0.8s;
    .hotspot:hover & {
      visibility: visible;
      opacity: 1;
    /* transition-delay: 0.5s; */
    }
  }

  .hotspot:hover {
    transform: scale(1.4); /* Increase scale on hover */
  }

  :not(:defined) > * {
    display: none;
  }
`;

export const HotspotButton = styled.button`
      cursor: pointer; /* Set the desired cursor style */
`;