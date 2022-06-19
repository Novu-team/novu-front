import { get } from 'lodash'

export default state => get(state, 'authentication.error', null)