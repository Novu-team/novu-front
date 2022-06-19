import { get } from 'lodash'
import { createGlobalStyle } from 'styled-components'
import theme from './theme'

import Helvetica from '../fonts/Helvetica.ttf'
import HelveticaLight from '../fonts/Helvetica-light.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "helvetica";
    src: url("./../fonts/Helvetica.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'helvetica';
    src: url('../fonts/Helvetica-Light.woff2') format('woff2');
    font-style: normal;
    font-display: swap;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  html {
    height: 100%;
  }

  body {
    font-family: "helvetica";

    height: 100%;

    background-image: linear-gradient(#FCFDFF, #F3F7FF);
    background-repeat: no-repeat;
    color: ${get(theme, 'grey', '#000')};
  }
`

export default GlobalStyle