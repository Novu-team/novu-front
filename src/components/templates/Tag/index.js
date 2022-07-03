import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import createAxiosInstance from '../../../utils/http'
import { useSelector } from 'react-redux'
import userToken from '../../../redux/selectors/userToken'
import styled from 'styled-components'
import { get, isEqual, reduce, size } from 'lodash'
import DataTableAlone from '../../organisms/DataTableAlone'
import Loading from '../../atoms/Loading'


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
  const [groups, setGroups] = useState([])
  const [housings, setHousing] = useState([])
  const [tagsLike, setTagsLike] = useState([])
  const [activities, setActivities] = useState([])
  const [tagsDislike, setTagsDislike] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  const instance = createAxiosInstance()
  const token = useSelector(userToken)

  useEffect(() => {
    try {
      const getUserFullInfo = async (userId) => {
        const { data }  = await instance.get(`/api/tag/${userId}`, {
          headers: { 'AUTHORIZATION': `Bearer ${token}` }
        })

        const { isLike, isNotLike } = reduce(data, (acc, value) => {
          if (isEqual(get(value, 'isLike'), true)) {
            return {
              ...acc, isLike: value
            }
          }
          return {
            ...acc, isNotLike: value
          }
        }, {isLike: [], isNotLike: []})

        const tagsLike = get(user, 'likeTags')
        const tagsDislike = get(user, 'dislikeTags')

        setUser(user)
        setGroups(groups)
        setHousing(housings)
        setTagsLike(tagsLike)
        setActivities(activities)
        setTagsDislike(tagsDislike)

        setLoading(false)
      }

      getUserFullInfo(id)
    } catch (e) {
      console.log(e)
    }
  }, [])

  const columnsGroup = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'name'
  }, {
    id: 'participantNumber',
    Header: 'Nombre de Participants',
    accessor: ({ participants }) => `${size(participants)}`,
  }, {
    id: 'codeToJoin',
    Header: 'Code d invitation',
    accessor: 'codeToJoin'
  }], [])

  const tagcolumns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'name'
  }, {
    Header: 'Catégorie',
    accessor: 'type'
  }], [])

  const locationColumns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'name'
  }, {
    id: 'url',
    Header: 'Lien vers la location',
    accessor: 'url'
  }, {
    id: 'available',
    Header: 'Disponible',
    accessor: ({ available }) => `${isEqual(available, true) ? 'disponible' : 'indisponible'}`,
  }, {
    id: 'description',
    Header: 'Description',
    accessor: 'description'
  }], [])

  const activityColumns = useMemo(() => [{
    id: 'name',
    Header: 'Nom',
    accessor: 'name'
  }, {
    id: 'price',
    Header: 'Prix',
    accessor: 'price'
  }, {
    id: 'dateTime',
    Header: 'Date de début',
    accessor: 'dateTime'
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
        {get(user, 'firstName')} {get(user, 'name')}
      </GiantTitle>
      <ContainerRow>
        <ContainerRight>
          <SubGiantTitle>
            Events Actif ({size(groups)})
          </SubGiantTitle>
        </ContainerRight>
        <ContainerRight>
          <DataTableAlone
            data={groups}
            columns={columnsGroup}
            loading={get(user, 'loading', false)} />
        </ContainerRight>
        <ContainerRight>
          <SubGiantTitle>
            Tags Liker ({size(tagsLike)})
          </SubGiantTitle>
          <SubGiantTitle>
            Tags Disliker ({size(tagsDislike)})
          </SubGiantTitle>
        </ContainerRight>
        <ContainerRight>
          <DataTableAlone
            data={tagsLike}
            columns={tagcolumns}
            loading={get(user, 'loading', false)} />
          <DataTableAlone
            data={tagsDislike}
            columns={tagcolumns}
            loading={get(user, 'loading', false)} />
        </ContainerRight>
        <ContainerRight>
          <SubGiantTitle>
            Historique des Hébergements proposés ({size(housings)})
          </SubGiantTitle>
          <SubGiantTitle>
            Historique des Activités proposés ({size(activities)})
          </SubGiantTitle>
        </ContainerRight>
        <ContainerRight>
          <DataTableAlone
            data={housings}
            columns={locationColumns}
            loading={get(user, 'loading', false)} />
          <DataTableAlone
            data={activities}
            columns={activityColumns}
            loading={get(user, 'loading', false)} />
        </ContainerRight>
      </ContainerRow>
    </MainContainer>
  )
}


export default TagPage