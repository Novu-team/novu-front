import { combineReducers } from 'redux'

import authentication from '../slices/authentication'

export default combineReducers({
  authentication: authentication.reducer
})