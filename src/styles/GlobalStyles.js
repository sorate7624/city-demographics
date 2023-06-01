import {
    createGlobalStyle
} from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle ` 
    :root {
        --pastel-green-color: #77DD76;
        --apple-color: #A6ECA8;
        --tea-green-color: #D2FDBB;
        --light-yellow-color: #FBFDE1;
        --pastel-yellow-color: #FDFD97;
        --gray-navy-color1: #27374D;
        --gray-navy-color2: #526D82;
        --gray-navy-color3: #9DB2BF;
        --gray-navy-color4: #DDE6ED;
        --navy-color: #24355F;
        --blue-color: #2CA9FD;
        --green-color: #19E2A1;
        --font-reqular: 1rem;
        --font-small: 0.8rem;
        background-color: #f6f6f6;
        height: fit-content;
        color: #fff;
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
        position: relative;
        justify-content: center;
        font-family: 'Nanum Gothic Coding', monospace;
        background-color: var(--navy-color);
        z-index: -2;
    }

    body::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(../../public/world-map.png) no-repeat center;
        background-size: contain;
        opacity: 0.2; /* 투명도 값을 조정할 부분 */
        z-index: -1;
    }

    #root {
        max-width: 1280px;
        width: calc(100% - 10rem);
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