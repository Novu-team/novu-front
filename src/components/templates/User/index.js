import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import createAxiosInstance from '../../../utils/http'
import { useSelector } from 'react-redux'
import userToken from '../../../redux/selectors/userToken'
import styled from 'styled-components'
import { get, isEmpty, isEqual, reduce, size, truncate } from 'lodash'
import DataTableAlone from '../../organisms/DataTableAlone'
import Loading from '../../atoms/Loading'
import Center from '../../atoms/Center'

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

const StyledLocation = styled.a`
`

const UserPage = () => {
  const [user, setUser] = useState({})
  const [groupsInactif, setGroupsInactif] = useState([])
  const [groupsActif, setGroupsActif] = useState([])
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
        const { data } = await instance.get(`/api/user/${userId}`, {
          headers: { 'AUTHORIZATION': `Bearer ${token}` }
        })

        const user = get(data, 'user')
        const groups = get(data, 'groups')
        const housings = get(data, 'housings')
        const activities = get(data, 'activities')

        const tagsLike = get(user, 'likeTags')
        const tagsDislike = get(user, 'dislikeTags')

        const { groupsActif, groupsInactif } = reduce(groups, (acc, group) => {
          const now = new Date().toLocaleDateString('fr-FR')
          const startDate = new Date(get(group, 'startDate')).toLocaleDateString('fr-FR')
          const endDate = new Date(get(group, 'endDate')).toLocaleDateString('fr-FR')
          const defaultDate = new Date(null).toLocaleDateString('fr-FR')

          if (isEqual(defaultDate, startDate) || isEqual(defaultDate, endDate)) {
            return {
              ...acc, groupsActif: [...get(acc, 'groupsActif', []), group]
            }
          }

          if (endDate < now) {
            return {
              ...acc, groupsInactif: [...get(acc, 'groupsInactif', []), group]
            }
          }

          return {
            ...acc, groupsActif: [...get(acc, 'groupsActif', []), group]
          }
        }, { groupsActif: [], groupsInactif: [] })

        setUser(user)
        setGroupsActif(groupsActif)
        setGroupsInactif(groupsInactif)
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
    Header: 'Nombre de participants',
    accessor: ({ participants }) => `${size(participants)}`
  }, {
    id: 'codeToJoin',
    Header: 'Code d\'invitation',
    accessor: 'codeToJoin'
  }], [])

  const tagColumns = useMemo(() => [{
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
    Header: 'Lien',
    accessor: 'url',
    // eslint-disable-next-line
    Cell: ({ value, row }) => {
      if (isEmpty(value)) {
        return (
          <Center>
            non renseigné
          </Center>
        )
      }

      return (
      <StyledLocation href={`${value}`}>
        {truncate(value, {
          'length': 20,
          'omission': '...'
        })}
      </StyledLocation>
    )}
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
    accessor: 'dateTime',
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
            Evénements actifs ({size(groupsActif)})
          </SubGiantTitle>
          <SubGiantTitle>
            Evénements inactifs ({size(groupsInactif)})
          </SubGiantTitle>
        </ContainerRight>
        <ContainerRight>
          <DataTableAlone
            data={groupsActif}
            columns={columnsGroup}
            loading={get(user, 'loading', false)} />
          <DataTableAlone
            data={groupsInactif}
            columns={columnsGroup}
            loading={get(user, 'loading', false)} />
        </ContainerRight>
        <ContainerRight>
          <SubGiantTitle>
            Tags aimés ({size(tagsLike)})
          </SubGiantTitle>
          <SubGiantTitle>
            Tags pas aimés ({size(tagsDislike)})
          </SubGiantTitle>
        </ContainerRight>
        <ContainerRight>
          <DataTableAlone
            data={tagsLike}
            columns={tagColumns}
            loading={get(user, 'loading', false)} />
          <DataTableAlone
            data={tagsDislike}
            columns={tagColumns}
            loading={get(user, 'loading', false)} />
        </ContainerRight>
        <ContainerRight>
          <SubGiantTitle>
            Historique des hébergements proposés ({size(housings)})
          </SubGiantTitle>
          <SubGiantTitle>
            Historique des activités proposées ({size(activities)})
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

export default UserPage