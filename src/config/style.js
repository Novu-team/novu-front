import { get } from 'lodash'
import { createGlobalStyle } from 'styled-components'
import theme from './theme'

import Helvetica from '../fonts/Helvetica.ttf'
import HelveticaLight from '../fonts/Helvetica-light.ttf'
import HelveticaWoff from './../fonts/helvetica.woff'

const GlobalStyle = createGlobalStyle`
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
    font-family: Helvetica;
    font-weight: lighter;
    height: 100%;
    background-image: linear-gradient(#FCFDFF, #F3F7FF);
    background-repeat: no-repeat;
    color: ${get(theme, 'grey', '#000')};
  }
`

export default GlobalStyle