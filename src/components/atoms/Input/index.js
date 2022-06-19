import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get, isEqual } from 'lodash'
import { useCallback, useState } from 'react'

import Eye from '../../../assets/svg/eye.svg'
import { useTranslation } from 'react-i18next'

const StyledEye = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`

const StyledDiv = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  color: ${({ theme }) => get(theme, 'grey', '#FFF')};
  padding: 4px 8px;
  box-sizing: border-box;
  border: 0.25px solid ${props => get(props, 'error', false) ? get(props, 'theme.alert', '#fff') : get(props, 'theme.grey', '#fff')};
  border-radius: 6px;
  font-size: 15px;
  font-family: 'Source Sans Pro', sans-serif;

  &::placeholder {
    color: ${({ theme }) => get(theme, 'grey', '#FFF')};
    font-family: 'Source Sans Pro', sans-serif;
  }
`

const PasswordInput = styled(StyledInput)`
  padding-right: 32px;
`

const Input = ({ type, name, label, error, value, onChange, ...props }) => {
  const { t } = useTranslation()
  const [passwordType, updatePasswordType] = useState('password')

  const onClick = useCallback(() =>
      updatePasswordType(isEqual(passwordType, 'password') ? 'text' : 'password'),
    [passwordType, updatePasswordType])

  if (isEqual(type, 'password')) {
    return (
      <StyledDiv>
        <PasswordInput
          name={name}
          type={passwordType}
          error={error}
          value={value}
          onChange={onChange}
          placeholder={label}
          data-testid='input'
          {...props} />
        <StyledEye src={Eye} onClick={onClick}/>
      </StyledDiv>
    )
  }

  return (
    <StyledInput
      name={name}
      type={type}
      error={error}
      value={value}
      onChange={onChange}
      placeholder={t(label)}
      data-testid='input'
      {...props} />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
  type: 'text',
  error: false
}

export default Input