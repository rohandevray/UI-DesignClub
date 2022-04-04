import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;
        background: linear-gradient(160deg, #000000 100%, white 30%);
        
    }
    @media (max-width:768px) {
        
        #carr{
            position: absolute;
            width: 90%;
            bottom: 10%;
        }
       
    }
    @media (max-width:840px) {
        #carr{
            position: absolute;
            width: 90%;
            bottom: 10%;
        }
    }
  
   
`;

export default Globalstyles;
