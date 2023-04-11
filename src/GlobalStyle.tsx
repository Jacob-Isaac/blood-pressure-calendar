import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: initial;
    padding: 0;
    margin: 0;
    }

    body{
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.whisper};
    min-width:320px;
    }
    code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;