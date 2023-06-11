import styled from "styled-components";

export const Div = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 2fr repeat(2, 1fr) 2fr repeat(2, 1fr) 2fr repeat(2, 1fr) 2fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-left: 300px;
`;