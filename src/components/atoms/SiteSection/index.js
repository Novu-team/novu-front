import styled from 'styled-components'

import media from '../../../utils/media'

const StyledSection = styled.section`
  margin: 120px 0;
  ${({ $first }) => $first ? 'margin-top: 100px;' : ''}
  ${({ $last }) => $last ? 'margin-bottom: 0px;' : ''}
  ${media.greaterThan('md')`
    margin: 160px 0;
  `}
`

export default StyledSection