import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { isNull, get } from 'lodash'
import { Navigate, Outlet } from 'react-router-dom'

import userToken from '../../../redux/selectors/userToken'

const AuthRoute = ({ isLogged, ...props }) => {
  const token = useSelector(userToken)

  if (isLogged && isNull(token)) {
    return (
      <Navigate to={{
        pathname: '/login',
        state: {
          from: get(props, 'location')
        }
      }} />
    )
  }

  if (!isLogged && !isNull(token)) {
    return (
      <Navigate to={{
        pathname: '/'
      }} />
    )
  }

  return (
    <Outlet {...props} />
  )
}

AuthRoute.propTypes = {
  isLogged: PropTypes.bool
}

AuthRoute.defaultProps = {
  isLogged: true
}

export default AuthRoute