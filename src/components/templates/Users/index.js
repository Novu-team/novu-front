import React, { useCallback, useMemo } from 'react'
import { get, isEqual, size } from 'lodash'

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
        color='white'
        onClick={() => {
          navigate('/createAdmin')
        }}
        background='primary'>
        Créer un administrateur
      </ActionButton>
    </ActionContainer>
  )
}

const Users = () => {
  const deleteUser = useCallback(async (id) => {
    try {
      await instance.delete(`/api/users/${id}/delete`, {
        headers: { 'AUTHORIZATION': `Bearer ${token}` }
      })
    } catch (err) {
      console.log(err)
    }
  })

  const columns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: ({ name, first_name }) => `${first_name} ${name}`,
    // eslint-disable-next-line react/prop-types
    Cell: ({ value, row }) => {
      if (isEqual(value, ' ')) {
        return (
          <>
            Compte supprimé
          </>
        )
      }

      return (
        <Link to={`/users/${get(row, 'original.userId')}`}>
          {value}
        </Link>
      )
    }
  }, {
    id: 'email',
    Header: 'Email',
    accessor: 'email',
    // eslint-disable-next-line
    Cell: ({ value, row }) => {
      if (value) {
        return (
          <Center>
            <TableCell>
              {value}
            </TableCell>
          </Center>
        )
      }

      return (
        <Center>
          <TableCell>
            indisponible
          </TableCell>
        </Center>
      )
    }
  }, {
    Header: 'Téléphone',
    accessor: 'phone_number',
    // eslint-disable-next-line
    Cell: ({ value, _ }) => {
      if (value) {
        return (
          <Center>
            <TableCell>
              {value}
            </TableCell>
          </Center>
        )
      }

      return (
        <Center>
          <TableCell>
            indisponible
          </TableCell>
        </Center>
      )
    }
  }, {
    Header: 'Trigramme',
    accessor: 'trigram',
    // eslint-disable-next-line
    Cell: ({ value, _ }) => {
      if (value) {
        return (
          <Center>
            <TableCell>
              {value}
            </TableCell>
          </Center>
        )
      }

      return (
        <Center>
          <TableCell>
            indisponible
          </TableCell>
        </Center>
      )
    }
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
    id: 'admin',
    Header: 'Admin',
    accessor: 'admin',
    // eslint-disable-next-line
    Cell: ({ value, row }) => {
      if (isEqual(value, 'false')) {
        return <Center>
          <TableCell>
            Non
          </TableCell>
        </Center>
      }

      return <Center>
        <TableCell>
          Oui
        </TableCell>
      </Center>
    }
  }, {
    Header: 'Suppression',
    accessor: 'userId',
    // eslint-disable-next-line
    Cell: ({ value, row }) => {
      if (isEqual(get(row, 'original.email', ''), '')) {
        return null
      }

      return (
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
    }
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