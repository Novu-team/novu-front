import styled from 'styled-components'
import { get } from 'lodash'

import media from '../../../utils/media'

const HomeSectionSubtitle = styled.p`
  margin: 16px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => get(theme, 'black', '#FFF')};
  
  ${media.lessThan('sm')`
    font-size: 16px;
  `}
  
  & > em {
    font-style: italic;
  }
`

export default HomeSectionSubtitle