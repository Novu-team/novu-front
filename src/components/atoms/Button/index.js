import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get, keys } from 'lodash'

import theme from '../../../config/theme'

const StyledButton = styled.button`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 600;
  padding: 6px 40px;
  outline: none;
  border: none;
  border-radius: 24px;
  color: ${({ theme, color }) => get(theme, color, '#008A92FF')};
  background-color: ${({ theme, background }) => get(theme, background, '#FFF')};
  cursor: pointer;
`

const Button = ({ color, fontSize, background, onClick, children, ...props }) => (
  <StyledButton
    color={color}
    onClick={onClick}
    fontSize={fontSize}
    background={background}
    data-testid='button'
    {...props}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  fontSize: PropTypes.number,
  children: PropTypes.any.isRequired,
  background: PropTypes.oneOf(keys(theme))
}

Button.defaultProps = {
  color: 'white',
  fontSize: 15,
  background: 'apple'
}

export default Button