import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    *:before,
    *:after{
        box-sizing:inherit
    }
        
    body{
        width:100vw;
        heigth:100vh;
        background-color:#f7f7f7;
    }
`;

export default GlobalStyle;
