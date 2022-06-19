import styled from 'styled-components'
import { get } from 'lodash'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: ${({ theme }) => get(theme, 'blue')};
  text-decoration: none;
  font-weight: normal;
`

export default StyledLink