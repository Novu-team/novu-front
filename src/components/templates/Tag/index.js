import React, { useEffect, useState, useMemo } from 'react'

import { useParams } from 'react-router-dom'
import createAxiosInstance from '../../../utils/http'
import { useSelector } from 'react-redux'
import userToken from '../../../redux/selectors/userToken'
import styled from 'styled-components'
import { get, isEqual, reduce, size } from 'lodash'
import DataTableAlone from '../../organisms/DataTableAlone'
import Loading from '../../atoms/Loading'
import Link from '../../atoms/Link'


const Container = styled.div`
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(51, 102, 204, 0.15);
  background-color: ${({ theme }) => get(theme, 'white')};
`

const StyledLoading = styled(Loading)`
  width: 20%;
  height: 20%;
  padding-top: 10%;
  padding-bottom: 10%;
`

const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 32px;
  justify-content: space-around;
`

const ContainerRow = styled.div`
`

const MainContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`

const GiantTitle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => get(theme, 'darkBlue', '#FFF')};
  padding-bottom: 30px;
  text-align: center;
`

const SubGiantTitle = styled.h2`
  font-size: 30px;
  color: ${({ theme }) => get(theme, 'primary', '#FFF')};
  padding: 15px;
`

const TagPage = () => {
  const [tag, setTag] = useState({})
  const [tagsLike, setTagsLike] = useState([])
  const [tagsDislike, setTagsDislike] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  const instance = createAxiosInstance()
  const token = useSelector(userToken)

  useEffect(() => {
    try {
      const getTagInfo = async (tagId) => {
        const { data }  = await instance.get(`/api/tag/${tagId}`, {
          headers: { 'AUTHORIZATION': `Bearer ${token}` }
        })

        const { tag, tags } = data

        const { isLike, isDislike } = reduce(tags, (acc, value) => {
          if (isEqual(get(value, 'isLike'), true)) {
            return {
              ...acc, isLike: [...get(acc, 'isLike', []), value]
            }
          }
          return {
            ...acc, isDislike: [...get(acc, 'isDislike', []), value]
          }
        }, { isLike: [], isDislike: [] })

        console.log(isLike)
        console.log(isDislike)

        setTag(tag)
        setTagsLike(isLike)
        setTagsDislike(isDislike)

        setLoading(false)
      }

      getTagInfo(id)
    } catch (e) {
      console.log(e)
    }
  }, [])

  const likeColumns = useMemo(() => [{
    id: 'user',
    Header: 'Name',
    accessor: 'user.name',
    // eslint-disable-next-line
    Cell: ({ value, row }) => {
      console.log(row)
      return (
      <Link to={`/users/${get(row, 'original.user.userId.value')}`}>
        {value}
      </Link>
    )}
  }, {
    id: 'numberLike',
    Header: 'Nombre de tags aimé',
    accessor: ({ user }) => `${size(get(user, 'likeTags', []))}`,
  }, {
    id: 'numberDisLike',
    Header: 'Nombre de tags pas aimé',
    accessor: ({ user }) => `${size(get(user, 'dislikeTags', []))}`,
  }], [])

  if (loading) {
    return (
      <Container>
        <StyledLoading />
      </Container>
    )
  }

  return (
    <MainContainer>
      <GiantTitle>
        {get(tag, 'name')} ({get(tag, 'type')})
      </GiantTitle>
      <ContainerRow>
        <ContainerRight>
          <SubGiantTitle>
            Like ({size(tagsLike)})
          </SubGiantTitle>
          <SubGiantTitle>
            Dislike ({size(tagsDislike)})
          </SubGiantTitle>
        </ContainerRight>
        <ContainerRight>
          <DataTableAlone
            data={tagsLike}
            columns={likeColumns}
            loading={get(tagsLike, 'loading', false)} />
          <DataTableAlone
            data={tagsDislike}
            columns={likeColumns}
            loading={get(tagsDislike, 'loading', false)} />
        </ContainerRight>
      </ContainerRow>
    </MainContainer>
  )
}


export default TagPage