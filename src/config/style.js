import { get } from 'lodash'
import { createGlobalStyle } from 'styled-components'
import theme from './theme'

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
    background-color: #F3F7FFFF;
    background-repeat: repeat;
    color: ${get(theme, 'grey', '#000')};
  }
`

export default GlobalStyle