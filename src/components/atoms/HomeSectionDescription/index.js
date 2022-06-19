import styled from 'styled-components'
import { get } from 'lodash'

import media from '../../../utils/media'

const HomeSectionDescription = styled.p`
  font-size: 16px;
  line-height: normal;
  color: ${({ theme }) => get(theme, 'blue', '#FFF')};

  ${media.lessThan('sm')`
    font-size: 15px;
  `}

  & > a {
    text-decoration: none;
    color: ${({ theme }) => get(theme, 'brightOrange', '#FFF')};
  }

  & > strong {
    font-weight: 600;
  }

  & > span {
    color: ${({ theme }) => get(theme, 'brightOrange', '#FFF')};
  }

  & > em {
    font-style: italic;
  }
`

export default HomeSectionDescription