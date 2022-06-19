import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import RoundButton from '../../atoms/RoundButton'

const Badge = styled(RoundButton)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: ${({ padding }) => padding}px;
  cursor: default;
`

const BadgeIcon = ({ color, size, padding, iconName, ...props }) => (
  <Badge
    size={size}
    color={color}
    padding={padding}
    iconName={iconName}
    background='transparent'
    borderColor={color}
    borderWidth={2}
    {...props} />
)

BadgeIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  padding: PropTypes.number,
  iconName: PropTypes.string.isRequired
}

BadgeIcon.defaultProps = {
  size: 21,
  color: 'grey',
  padding: 2
}

export default BadgeIcon