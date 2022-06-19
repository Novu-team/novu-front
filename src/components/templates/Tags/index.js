import React, { useCallback } from 'react'
import { get } from 'lodash'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Center from '../../atoms/Center'
import RoundButton from '../../atoms/RoundButton'
import ListTemplate from '../../templates/ListTemplate'
import createInstance from '../../../utils/http'
import { useDispatch, useSelector } from 'react-redux'
import userToken from '../../../redux/selectors/userToken'

const Tags = () => {
  const { t } = useTranslation()
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
      actionBar={() => null}
      columns={columns}
      type='tags' />
  )
}

export default Tags