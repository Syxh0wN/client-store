import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root { 
    --Color-Primary: #868E96;
    --Color-Primary-Focus: #6B737D;
    --Color-Primary-Negative: #6D7B8D;
    --Color-Grey-4: #121214;
    --Color-Grey-3: #212529;
    --Color-Grey-2: #343B41;
    --Color-Grey-1: #868E96;
    --Color-Grey-0: #F8F9FA;
    --Color-Success: #3FE864;
    --Color-Error: #E83F5B;
    --Color-Negative: #E83F5B;

    background: var(--Color-Grey-4);
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    text-decoration: none;
  }

  ul, li, lo{
    list-style: none;
  }

  body, html{
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
