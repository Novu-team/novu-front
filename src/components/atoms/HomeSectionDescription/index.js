import styled from 'styled-components'
import { get } from 'lodash'

import media from '../../../utils/media'

const HomeSectionDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => get(theme, 'white', '#FFF')};

  ${media.lessThan('sm')`
    font-size: 15px;
  `}

  & > a {
    text-decoration: none;
    color: ${({ theme }) => get(theme, 'white', '#FFF')};
  }

  & > strong {
    font-weight: 600;
  }

  & > span {
    color: ${({ theme }) => get(theme, 'white', '#FFF')};
  }

  & > em {
    font-style: italic;
  }
`

export default HomeSectionDescription