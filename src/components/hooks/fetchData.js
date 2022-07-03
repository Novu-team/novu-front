import React from 'react'
import { useDispatch } from 'react-redux'
import { get, isEmpty, isEqual } from 'lodash'
import { useCallback, useEffect, useRef, useState } from 'react'

import createInstance from '../../utils/http'


const FetchData = (type, token, page, search, specialName) => {
  const dispatch = useDispatch()
  const [count, updateCount] = useState(0)
  const [loading, updateLoading] = useState(false)
  const [fetched, updateFetched] = useState([])
  const [maxPage, updateMaxPage] = useState(0)
  const [fetchSearch, updateFetchSearch] = useState({})
  const [loadingCount, updateLoadingCount] = useState(false)
  const instance = useRef(createInstance(dispatch))

  const fetchItems = useCallback(async () => {
    updateLoading(true)

    try {
      const { data } = await instance.current.get(`/api/${type}`, {
        headers: { 'AUTHORIZATION': `Bearer ${token}` },
        params: { page, search }
      })

      const field = isEmpty(specialName) ? type : specialName

      updateFetched(get(data, field, []))
    } catch (err) {
      console.log(err)
    } finally {
      updateLoading(false)
    }
  })

  const countItems = useCallback(async () => {
    updateLoadingCount(true)
    try {
      const { data: dataCount } = await instance.current.get(`/api/${type}/count`, {
        headers: { 'AUTHORIZATION': `Bearer ${token}` },
        params: { search }
      })

      updateMaxPage(get(dataCount, 'maxPage', 1))
      updateCount(get(dataCount, 'count', 0))
    } catch (err) {
      console.log(err)
    } finally {
      updateLoadingCount(false)
    }
  })

  useEffect(() => {
    fetchItems()
  }, [page, fetchSearch])

  useEffect(() => {
    countItems()
  }, [fetchSearch])

  useEffect(() => {
    if (!isEqual(search, fetchSearch)) {
      updateFetchSearch(search)
    }
  }, [search])

  return { fetched, maxPage, count, loading, loadingCount }
}

export default FetchData