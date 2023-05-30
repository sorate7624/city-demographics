import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle` 
    :root {
        --pastel-green-color: #77DD76;
        --apple-color: #A6ECA8;
        --tea-green-color: #D2FDBB;
        --light-yellow-color: #FBFDE1;
        --pastel-yellow-color: #FDFD97;
        --font-reqular: 1rem;
        --font-small: 0.8rem;
        background-color: #f6f6f6;
        color: #17181B;
    }
    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    html, body, #root {
        height: 100%;
    }
    html,
    body,
    body > div { /* the react root */
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        justify-content: center;
    }
    h2 {
        margin: 0;
        font-size: 16px;
    }
    ul {
        margin: 0;
        padding: 0 0 0 1.5em;
    }
    li {
        padding: 0;
    }
    b { 
        margin-right: 3px;
    }
`;