import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get, isEqual } from 'lodash'

import media from '../../../utils/media'

const style = ({ theme }) => `
  font-size: 16px;
  line-height: normal;
  color: ${get(theme, 'black', '#008A92FF')};

  & > em {
    font-style: italic;
  }

  & > span {
    font-weight: bold;
    color: ${get(theme, 'black', '#FFF')};
  }
`

const TitleH2 = styled.h2`
  ${(props) => style(props)}

  ${media.lessThan('sm')`
    font-size: 22px;
  `}
`

const TitleH3 = styled.h3`
  ${(props) => style(props)}

  ${media.lessThan('sm')`
    font-size: 22px;
  `}
`

const TitleP = styled.p`
  ${(props) => style(props)}

  ${media.lessThan('sm')`
    font-size: 22px;
  `}
`

const HomeSectionTitle = ({ tag, children, ...props }) => {
  if (isEqual(tag, 'h2')) {
    return (
      <TitleH2 {...props}>
        {children}
      </TitleH2>
    )
  }
  if (isEqual(tag, 'h3')) {
    return (
      <TitleH3 {...props}>
        {children}
      </TitleH3>
    )
  }

  return (
    <TitleP {...props}>
      {children}
    </TitleP>
  )
}

HomeSectionTitle.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired
}

HomeSectionTitle.defaultProps = {
  tag: 'p'
}

export default HomeSectionTitle