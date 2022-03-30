import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background: linear-gradient(160deg, #254fd4 70%, white 30%);
        overflow: hidden;
    }
   
`;

export default Globalstyles;
