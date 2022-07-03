import React, { useCallback } from 'react'
import { useMemo } from 'react'

import Center from '../../atoms/Center'
import RoundButton from '../../atoms/RoundButton'
import ListTemplate from '../../templates/ListTemplate'
import createInstance from '../../../utils/http'
import { useDispatch, useSelector } from 'react-redux'
import userToken from '../../../redux/selectors/userToken'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import { useNavigate } from 'react-router-dom'


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
          navigate('/createTag')
        }}
        background='primary'>
        Crée un tag
      </ActionButton>
    </ActionContainer>
  )
}

const Tags = () => {
  const dispatch = useDispatch()
  const instance = createInstance(dispatch)
  const token = useSelector(userToken)

  const deleteTag = useCallback(async (id) => {
    try {
      await instance.delete(`/api/tags/${id}`, {
        headers: { 'AUTHORIZATION': `Bearer ${token}` }
      })
    } catch (err) {
      console.log(err)
    }
  })

  const columns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'name'
  }, {
    Header: 'Type',
    accessor: 'type'
  }, {
    Header: 'Suppression',
    accessor: 'id',
    // eslint-disable-next-line
    Cell: ({ value, row }) => (
      <Center>
        <RoundButton
          color='white'
          onClick={() => {
            return deleteTag(`${value}`)
          }}
          background={'primary'}
          iconName='trash-alt'/>
      </Center>
    )
  }], [])

  return (
    <ListTemplate
      context='TAGS'
      actionBar={ActionBar}
      columns={columns}
      type='tagsPage'
      specialName='tags'
    />
  )
}

export default Tags