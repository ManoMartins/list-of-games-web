import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    --webkit-font-smoothing: antialiased;
    background: #181818;
    color: #efeff1;
  }

  ul {
    list-style: none;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: #efeff1;
  }

  button {
    cursor: pointer;
  }
`;
