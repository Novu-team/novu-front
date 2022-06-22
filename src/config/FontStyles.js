import { createGlobalStyle } from "styled-components"
import HelveticaLight from "./../fonts/Helvetica-Light.woff2"

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica';
    src: url(${HelveticaLight}) format('woff2');
  }
`;

export default FontStyles