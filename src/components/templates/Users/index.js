import React, { useCallback, useMemo } from 'react'
import { get, isEqual } from 'lodash'

import Link from '../../atoms/Link'
import Center from '../../atoms/Center'
import ListTemplate from '../../templates/ListTemplate'
import Button from '../../atoms/Button'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import RoundButton from '../../atoms/RoundButton'

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

const ActionBar = () => {
  const navigate = useNavigate()

  return (
    <ActionContainer>
      <ActionButton
        color="white"
        onClick={() => {
          navigate('/createAdmin')
        }}
        background="primary">
        Créer un administrateur
      </ActionButton>
    </ActionContainer>
  )
}

const Users = () => {
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
    Header: 'Téléphone',
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
      actionBar={ActionBar}
      columns={columns}
      type='users' />
  )
}

export default Users