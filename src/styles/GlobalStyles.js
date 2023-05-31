import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle` 
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
        --font-reqular: 1rem;
        --font-small: 0.8rem;
        background-color: #f6f6f6;
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
        justify-content: center;
        font-family: 'Nanum Gothic Coding', monospace;
    }

    body::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background-image: url(../../public/people-group.jpg);
        background-size: contain;
        // opacity: 0.2;
        z-index: -1;
        background-color: var(--navy-color);
    }

    #root {
        max-width: 1280px;
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