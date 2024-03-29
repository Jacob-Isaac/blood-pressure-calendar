import styled from "styled-components";
 import Globe from "../../common/Elements/Thermometer/index";

export const Div = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 2fr repeat(2, 1fr) 2fr repeat(2, 1fr) 2fr repeat(2, 1fr) 2fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-left: 300px;
`;
export const Div1 = styled.div`
  cursor: pointer;
   align-items: center;
  justify-content: space-between; 
  height: 3.5rem;
  width: 25rem;
  border-radius: 15px;
  padding: 10px;
  transition: all 0.2s ease 0s;
grid-area: 2 / 1 / 4 / 2;
`;
export const Div2= styled.div<{disabled: boolean}>`
   cursor: pointer;
   align-items: center;
  justify-content: space-between; 
  height: 3.5rem;
  width: 25rem;
  border-radius: 15px;
  padding: 10px;
  transition: all 0.2s ease 0s;
grid-area: 5 / 1 / 7 / 2;
`;
export const Div3 = styled.div`
  cursor: pointer;
   align-items: center;
  justify-content: space-between; 
  height: 3.5rem;
  width: 25rem;
  border-radius: 15px;
  padding: 10px;
  transition: all 0.2s ease 0s;
grid-area: 8 / 1 / 10 / 2;
`;
export const Div4 = styled.div`
grid-area: 2 / 2 / 11 / 3;
margin-bottom: 20px;
margin-top: -30px;
cursor: pointer;
`;
 export const StyledGlobe = styled(Globe)`

`;