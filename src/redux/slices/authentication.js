import { get, indexOf, isEqual } from 'lodash'
import jwt_decode from 'jwt-decode'
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import createAxiosInstance from '../../utils/http'

export const loginUser = createAsyncThunk('authentication/loginUser', async ({
  email,
  password
}, { rejectWithValue }) => {
  try {
    const instance = createAxiosInstance()
    const { data } = await instance.post('/api/login', {
      email,
      password
    })
    const token = get(data, 'access_token')

    const decodedToken = jwt_decode(token)

    const roles = get(decodedToken, 'roles')

    const isAdmin = !isEqual(indexOf(roles, 'ADMIN'), -1)

    if (!isAdmin) {
      throw ({
        response: {
          status: 401,
          data: 'Vous n\'êtes pas un administrateur'
        }
      })
    }

    return {
      token
    }
  } catch (error) {
    console.log({ error })
    return rejectWithValue({
      code: error.response.status,
      data: error.response.data
    })
  }
})

export const logoutUser = createAction('authentication/logoutUser')

const initialState = {
  token: null,
  error: null,
  pending: false,
  currentUser: null
}

export default createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: {
    [logoutUser]: state => {
      state.token = null
      state.error = null
      state.pending = false
      state.currentUser = null
    },
    [loginUser.pending]: state => {
      state.error = null
      state.pending = true
    },
    [loginUser.rejected]: (state, action) => {
      state.error = get(action, 'payload')
      state.pending = false
    },
    [loginUser.fulfilled]: (state, action) => {
      state.token = get(action, 'payload.token')
      state.error = null
      state.pending = false
    }
  }
})