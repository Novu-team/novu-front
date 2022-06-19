import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get } from 'lodash'

import Icon from '../Icon'

const Round = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  background: ${({ theme, background }) => get(theme, background, '#FFF')};
  border: ${({ borderWidth }) => borderWidth}px solid ${({ theme, borderColor }) => get(theme, borderColor, '#FFF')};
  border-radius: 50%;
  width: 32px;
  height: 32px;
`

const StyledIcon = styled(Icon)`
  && {
    width: auto;
    height: 100%;
  }
`

const RoundButton = ({ iconName, color, onClick, background, borderWidth, borderColor, ...props }) => (
  <Round
    onClick={onClick}
    background={background}
    borderWidth={borderWidth}
    borderColor={borderColor}
    data-testid='roundButton'
    {...props}>
    <StyledIcon
      color={color}
      iconName={iconName} />
  </Round>
)

RoundButton.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  iconName: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  borderWidth: PropTypes.number
}

RoundButton.defaultProps = {
  onClick: () => { },
  borderWidth: 1
}

export default RoundButton