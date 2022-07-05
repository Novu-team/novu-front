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
import Link from '../../atoms/Link'
import { get } from 'lodash'


const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ActionButton = styled(Button)`
  margin: 0 8px;
`

const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  justify-content: space-around;
`

const SubGiantTitle = styled.h2`
  font-size: 30px;
  color: ${({ theme }) => get(theme, 'primary', '#FFF')};
  padding: 15px;
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
    accessor: 'name',
    // eslint-disable-next-line
    Cell: ({ value, row }) => (
      <Link to={`/tags/${get(row, 'original.id')}`}>
        {value}
      </Link>
    )
  }, {
    id: 'type',
    Header: 'Type',
    accessor: 'type'
  }, {
    id: 'numberLike',
    Header: 'Nombres de Like',
    accessor: 'numberLike'
  }, {
    id: 'numberDislike',
    Header: 'Nombres de Dislike',
    accessor: 'numberDislike'
  }, {
    id: 'suppression',
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
    <>
      <ListTemplate
        context='TAGS'
        actionBar={ActionBar}
        columns={columns}
        type='tagsPage'
        specialName='tags'
      />
      <ContainerRight>
        <SubGiantTitle>
          Top 5 des Types les plus likés
        </SubGiantTitle>
        <SubGiantTitle>
          Top 5 des Types les plus Dislikés
        </SubGiantTitle>
      </ContainerRight>

    </>
  )
}

export default Tags