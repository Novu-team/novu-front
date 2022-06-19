import React from 'react'
import qs from 'qs'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useCallback, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { get, map, range, isEqual } from 'lodash'

import Icon from '../../atoms/Icon'
import Center from '../../atoms/Center'

const StyledIcon = styled(Icon)`
  margin: 0 8px;
  cursor: pointer;
`

const StyledPagination = styled(Center)`
  margin-top: 24px;
`
const StyledPage = styled.p`
  margin: 0 4px;
  padding: 4px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
  &.selected{
    font-weight: 600;
  }
`

const Pagination = ({ updatePage, page, maxPage }) => {
  const minPage = 0
  const history = useNavigate()
  const location = useLocation()
  const changePage = useCallback((newPage) => () => updatePage(newPage), [])
  const decrementPage = useCallback(() => updatePage(page - 1), [page])
  const incrementPage = useCallback(() => updatePage(page + 1), [page])
  const pages = useCallback(() => range(Math.max(0, page - 3), Math.min(page + 3, maxPage + 1)), [page, maxPage])

  useEffect(() => {
    const params = qs.parse(get(location, 'search', '').substring(1))
    history(`${get(location, 'pathname', '')}?${qs.stringify({
      ...params,
      page
    })}`, { replace: true })
  }, [page])

  return (
    <StyledPagination >
      {page > minPage &&
        <StyledIcon
          color='gray'
          iconName='chevron-left'
          onClick={decrementPage} />}
      {map(pages(), (item, key) => (
        <StyledPage
          key={key}
          onClick={changePage(parseInt(item, 10))}
          className={isEqual(item, page) ? 'selected' : ''}>
          {item}
        </StyledPage>
      ))}
      {page < maxPage &&
        <StyledIcon
          color='gray'
          iconName='chevron-right'
          onClick={incrementPage} />}
    </StyledPagination>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
}

export default Pagination