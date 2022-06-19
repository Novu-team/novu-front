import styled from 'styled-components'
import { get } from 'lodash'

const Title = styled.h1`
  color: ${({ color, theme }) => get(theme, color, '#fff')};
  margin: 16px 0px;
  display: block;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  font-family: 'helvetica';
`

export default Title