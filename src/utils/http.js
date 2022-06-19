import axios from 'axios'
import { StatusCodes } from 'http-status-codes'
import { isEqual, get } from 'lodash'

import { API_URL } from '../config'
import { logoutUser } from '../redux/slices/authentication'

const createInstance = (dispatch) => {
  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.response.use(response => response, error => {
    const { status } = error.response

    if (isEqual(status, get(StatusCodes, 'FORBIDDEN'))) {
      dispatch(logoutUser())
    }

    return Promise.reject(error)
  })

  return instance
}

export default createInstance