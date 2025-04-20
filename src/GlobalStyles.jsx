import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`






html {
  scroll-behavior: smooth;
  /* 1rem = 10px */
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

body::-webkit-scrollbar-thumb {
 
 background: #fff;
   border: 5px solid transparent;
   border-radius: 9px;
   background-clip: content-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
`;
