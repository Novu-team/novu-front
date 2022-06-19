import { get } from 'lodash'

export default state => get(state, 'authentication.token', null)