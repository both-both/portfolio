import { createGlobalStyle } from "styled-components";

import { reset, resetLink } from "./Mixins";

export const GlobalStyle = createGlobalStyle`
* {
  ${reset}
}
body {
    background-color: ${(props) => props.theme.color.secondary};
    
    font-family: ${(props) => props.theme.font.primary};
   
    color: ${({ theme }) => theme.color.primary};
   

}

a {
    ${resetLink}
}`;
