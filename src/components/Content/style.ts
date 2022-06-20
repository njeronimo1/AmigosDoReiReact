

import styled from "styled-components";

export const Container = styled.div`
   color: white;

   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60vh;
  
   /* margin-top: 10rem; */

   @media(max-width:500px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 90vh;
   }
`