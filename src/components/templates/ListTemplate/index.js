import React from 'react'
import qs from 'qs'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { get, omit, isEqual } from 'lodash'

import DataTable from '../../organisms/DataTable'
import SearchBar from '../../organisms/SearchBar'
import fetchData from '../../hooks/fetchData'
import userToken from '../../../redux/selectors/userToken'

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  overflow: auto;
  flex-grow: 1;
`

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
`

const ListTemplate = ({ context, actionBar: ActionBar, columns, type, fields }) => {
  const token = useSelector(userToken)
  const location = useLocation()

  const [page, updatePage] = useState(
    parseInt(
      get(qs.parse(
        get(location, 'search', '').substring(1)
      ), 'page', 0),
      10)
  )

  const [search, updateSearch] = useState({})

  useEffect(() => {
    const updatedSearch = omit(qs.parse(
      get(location, 'search', '').substring(1)
    ), ['page'])

    if (!isEqual(search, updateSearch)) {
      updateSearch(updatedSearch)
    }
  }, [location])

  const data = fetchData(type, token, page, search)

  return (
    <Container>
      {/*<SearchBar*/}
      {/*  count={get(data, 'count', 0)}*/}
      {/*  fields={fields}*/}
      {/*  search={search}*/}
      {/*  updateSearch={updateSearch}*/}
      {/*  context={context} />*/}
      <ContainerRight>
        <ContainerRow>
          <ActionBar />
        </ContainerRow>
        <DataTable
          data={get(data, 'fetched', [])}
          page={page}
          loading={get(data, 'loading', false)}
          maxPage={get(data, 'maxPage', 1)}
          columns={columns}
          updatePage={updatePage} />
      </ContainerRight>
    </Container>
  )
}

ListTemplate.propTypes = {
  type: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  context: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  actionBar: PropTypes.elementType.isRequired
}

export default ListTemplate