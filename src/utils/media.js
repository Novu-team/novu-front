import { generateMedia } from 'styled-media-query'

export const breakpoints = {
  sm: '577px',
  md: '769px',
  lg: '993px',
  xl: '1201px',
  xxl: '1401px',
  xxxl: '1601px'
}

const media = generateMedia(breakpoints)

export default media