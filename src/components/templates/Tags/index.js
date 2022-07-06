import React, { useCallback, useEffect, useState } from 'react'
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
import DataTableAlone from '../../organisms/DataTableAlone'
import Loading from '../../atoms/Loading'


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

const StyledLoading = styled(Loading)`
  width: 20%;
  height: 20%;
  padding-top: 10%;
  padding-bottom: 10%;
`

const Container = styled.div`
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(51, 102, 204, 0.15);
  background-color: ${({ theme }) => get(theme, 'white')};
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
  const [mostTagsLike, setMostTagsLike] = useState([])
  const [mostTagsDislike, setMostTagsDislike] = useState([])
  const [mostTypeLike, setMostTypeLike] = useState([])
  const [MostTypeDislike, setMostTypeDislike] = useState([])
  const dispatch = useDispatch()
  const instance = createInstance(dispatch)
  const token = useSelector(userToken)
  const [loading, setLoading] = useState(true)

  const deleteTag = useCallback(async (id) => {
    try {
      await instance.delete(`/api/tags/${id}`, {
        headers: { 'AUTHORIZATION': `Bearer ${token}` }
      })
    } catch (err) {
      console.log(err)
    }
  })

  useEffect(() => {
    try {
      const getTagsRanking = async () => {
        const { data }  = await instance.get(`/api/tags/type/ranking`, {
          headers: { 'AUTHORIZATION': `Bearer ${token}` }
        })

        const { mostLikes, mostDislikes, mostTypeLikes, mostTypeDislikes } = data

        setMostTagsLike(mostLikes)
        setMostTypeLike(mostTypeLikes)
        setMostTagsDislike(mostDislikes)
        setMostTypeDislike(mostTypeDislikes)

        setLoading(false)
      }

      getTagsRanking()
    } catch (e) {
      console.log(e)
    }
  }, [])

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
    Header: 'Nombre(s) de Like',
    accessor: 'numberLike'
  }, {
    id: 'numberDislike',
    Header: 'Nombre(s) de Dislike',
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

  const mostLikeColumns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'name',
    // eslint-disable-next-line
    Cell: ({ value, row }) => (
      <Link to={`/tags/${get(row, 'original.id')}`}>
        {value}
      </Link>
    )
  },
    {
    id: 'numberLike',
    Header: 'Nombre(s) de j\'aime',
    accessor: 'numberLike'
  }], [])

  const mostDislikeColumns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'name',
    // eslint-disable-next-line
    Cell: ({ value, row }) => (
      <Link to={`/tags/${get(row, 'original.id')}`}>
        {value}
      </Link>
    )
  },
    {
    id: 'numberLike',
    Header: 'Nombre(s) de j\'aime pas',
    accessor: 'numberDislike'
  }], [])

  const mostTypeDislikeColumns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'type'
  },
    {
      id: 'numberLike',
      Header: 'Nombre(s) de j\'aime',
      accessor: 'numberDislike'
    }], [])

  const mostTypeLikeColumns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'type'
  },
    {
      id: 'numberLike',
      Header: 'Nombre(s) de j\'aime pas',
      accessor: 'numberLike'
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
      { loading ? (
        <Container>
        <StyledLoading />
        </Container>
        ) : <>
        <ContainerRight>
          <SubGiantTitle>
            Tags les plus aimé
          </SubGiantTitle>
          <SubGiantTitle>
            Tags les moins aimé
          </SubGiantTitle>
        </ContainerRight>
        <ContainerRight>
          <DataTableAlone
          data={mostTagsLike}
          columns={mostLikeColumns}
          loading={get(mostTagsLike, 'loading', false)} />
          <DataTableAlone
          data={mostTagsDislike}
          columns={mostDislikeColumns}
          loading={get(mostTagsDislike, 'loading', false)} />
        </ContainerRight>
        <ContainerRight>
          <SubGiantTitle>
            Catégorie le plus aimé
          </SubGiantTitle>
          <SubGiantTitle>
            Catégorie le moins aimé
          </SubGiantTitle>
        </ContainerRight>
        <ContainerRight>
          <DataTableAlone
            data={mostTypeLike}
            columns={mostTypeLikeColumns}
            loading={get(mostTypeLike, 'loading', false)} />
          <DataTableAlone
            data={MostTypeDislike}
            columns={mostTypeDislikeColumns}
            loading={get(MostTypeDislike, 'loading', false)} />
        </ContainerRight>
        </>
      }
    </>
  )
}

export default Tags