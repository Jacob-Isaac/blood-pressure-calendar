import styled from "styled-components";

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
  background-color: rgb(255, 255, 255);
  list-style: none;
  align-items: center;
  width: 25rem;
  height: 3.5rem;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
  padding: 10px;
  justify-content: space-between;
  transition: all 0.2s ease 0s;
grid-area: 2 / 1 / 4 / 2;
`;
export const Div2= styled.div`
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  display: inline-block;
  list-style: none;
  display: flex;
  align-items: center;
  width: 25rem;
  height: 3.5rem;
  border-radius: 15px;

  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
  padding: 10px;
  justify-content: space-between;

  transition: all 0.2s ease 0s;
grid-area: 5 / 1 / 7 / 2;
`;
export const Div3 = styled.div`
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  display: inline-block;
  list-style: none;
  display: flex;
  align-items: center;
  width: 25rem;
  height: 3.5rem;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
  padding: 10px;
  justify-content: space-between;
  transition: all 0.2s ease 0s;
grid-area: 8 / 1 / 10 / 2;
`;
export const Div4 = styled.div`
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  display: inline-block;
  list-style: none;
  display: flex;
  align-items: center;
  width: 3.5rem;
  height: 25rem;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
  padding: 10px;
  justify-content: space-between;

  transition: all 0.2s ease 0s;
grid-area: 2 / 2 / 11 / 3;
`;