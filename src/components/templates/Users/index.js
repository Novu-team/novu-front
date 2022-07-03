import React, { useCallback } from 'react'
import { get, isEqual } from 'lodash'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Link from '../../atoms/Link'
import Center from '../../atoms/Center'
import RoundButton from '../../atoms/RoundButton'
import ListTemplate from '../../templates/ListTemplate'
import createInstance from '../../../utils/http'
import { useDispatch, useSelector } from 'react-redux'
import userToken from '../../../redux/selectors/userToken'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import { useNavigate } from 'react-router-dom'


const TableCell = styled.td`
  height: 45px;
  padding: 0 8px;
  vertical-align: middle;
  font-size: 15px;
  text-align: ${({ left }) => left ? 'left' : 'center'};
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ActionButton = styled(Button)`
  margin: 0 8px;
`

const Users = () => {
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
    Header: 'Trigramme',
    accessor: 'trigram'
  }, {
    Header: 'Sexe',
    accessor: 'sex',
    // eslint-disable-next-line
    Cell: ({ value, row }) => {
      if (isEqual(value, 'false')) {
        return <Center>
          <TableCell>
            Homme
          </TableCell>
        </Center>
      }

      if (isEqual(value, 'true')) {
        return <Center>
          <TableCell>
            Femme
          </TableCell>
        </Center>
      }

      return (
        <Center>
          <TableCell>
            Autres
          </TableCell>
        </Center>
      )
    }
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
      actionBar={() => {}}
      columns={columns}
      type='users' />
  )
}

export default Users