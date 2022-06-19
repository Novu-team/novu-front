import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import theme from '../../../config/theme'

const Icon = ({ color, iconName, component: Component, ...props }) => {
  if (Component) {
    return (
      <Component
        color={get(theme, color)}
        {...props} />
    )
  }

  return (
    <FontAwesomeIcon
      icon={iconName}
      color={get(theme, color)}
      {...props} />
  )
}

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  iconName: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  component: PropTypes.elementType
}

Icon.defaultProps = {
  iconName: ''
}

export default Icon