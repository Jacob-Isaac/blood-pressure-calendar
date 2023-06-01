import styled from "styled-components";

  export const AddToList1 = styled.form`
    display: flex;
    flex-direction: column;
    width: 30rem;
    margin: 2rem auto;
`;
export const AddToListInput = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    margin: 0.3rem 0rem;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
    background-color: rgb(255, 255, 255);
  `;
  export const AddToListTextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  margin: 0.3rem 0rem;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
  background-color: rgb(255, 255, 255);
`;

  export const AddToListBtn = styled.button` 
    margin-top: 10px;
    padding: 0.6rem;
    cursor: pointer;
    background-color: #0b5468;
    font-weight: 700;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease 0s;
    &:hover {
        transform: scale(1.03);
    }
  `;