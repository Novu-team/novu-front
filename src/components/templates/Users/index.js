import React from 'react'
import { get, isEqual } from 'lodash'
import { useMemo } from 'react'

import Link from '../../atoms/Link'
import Center from '../../atoms/Center'
import ListTemplate from '../../templates/ListTemplate'
import styled from 'styled-components'

const TableCell = styled.td`
  height: 45px;
  padding: 0 8px;
  vertical-align: middle;
  font-size: 15px;
  text-align: ${({ left }) => left ? 'left' : 'center'};
`

const Users = () => {
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