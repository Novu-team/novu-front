import { createGlobalStyle } from "styled-components"

import HelveticaLight from "./../fonts/Helvetica-Light.woff2"
import Helvetica from './../fonts/Helvetica.woff2'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'HelveticaLight';
    src: url(${HelveticaLight}) format('woff2') font-weight-normal,
    url(${Helvetica}) format('woff2') font-weight-bold;
  }
`;

export default FontStyles