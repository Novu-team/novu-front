import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get, isEqual } from 'lodash'
import { useTranslation } from 'react-i18next'

const ErrorText = styled.p`
  color: ${props => get(props, 'theme.alert', '#CF0023FF')};
  font-size: 15px;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
`

const Error = ({ error, context }) => {
  const { t } = useTranslation()

  if (isEqual(get(error, 'code'), 404)) {
    return (
      <ErrorText>{t(`ERROR.${context}.notFound`)}</ErrorText>
    )
  }

  if (isEqual(get(error, 'code'), 403)) {
    return (
      <ErrorText>{t(`ERROR.${context}.forbidden`)}</ErrorText>
    )
  }

  return <div className='mt-5' />
}

Error.propTypes = {
  error: PropTypes.object,
  context: PropTypes.string
}

Error.defaultProps = {
  error: null,
  context: 'COMMON'
}

export default Error