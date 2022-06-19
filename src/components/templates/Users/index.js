import React, { useCallback } from 'react'
import { get } from 'lodash'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Link from '../../atoms/Link'
import Center from '../../atoms/Center'
import RoundButton from '../../atoms/RoundButton'
import ListTemplate from '../../templates/ListTemplate'
import createInstance from '../../../utils/http'
import { useDispatch, useSelector } from 'react-redux'
import userToken from '../../../redux/selectors/userToken'

const Users = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const instance = createInstance(dispatch)
  const token = useSelector(userToken)

  const deleteUser = useCallback(async (id) => {
    try {
      await instance.delete(`/api/users/${id}`, {
        headers: { 'AUTHORIZATION': `Bearer ${token}` }
      })
    } catch (err) {
      console.log(err)
    }
  })

  const columns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: ({ name, first_name }) => `${name} ${first_name}`,
    // eslint-disable-next-line react/prop-types
    Cell: ({ value, row }) => (
      <Link to={`/users/${get(row, 'original.userId')}`}>
        {value}
      </Link>
    )
  }, {
    Header: 'Email',
    accessor: 'email'
  }, {
    Header: 'Telephone',
    accessor: 'phone_number'
  }, {
    Header: 'Suppression',
    accessor: 'userId',
    // eslint-disable-next-line
    Cell: ({ value, row }) => (
      <Center>
        <RoundButton
          color='white'
          onClick={() => {
            return deleteUser(`${value}`)
          }}
          background={'primary'}
          iconName='trash-alt'/>
      </Center>
    )
  }], [])

  return (
    <ListTemplate
      context='USERS'
      actionBar={() => null}
      columns={columns}
      type='users' />
  )
}

export default Users