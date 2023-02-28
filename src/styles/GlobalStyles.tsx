import "@fontsource/saira-stencil-one";
import "@fontsource/work-sans";
import "@fontsource/roboto";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --primary-color: #1E1E1E;
  --primary-font: "Saira Stencil One", sans-serif;
  --secondary-font: "Roboto", sans-serif;
}
  
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Work Sans', sans serif;
  padding: 30px 10px;
  min-height:100vh;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}`;

export default GlobalStyles;
