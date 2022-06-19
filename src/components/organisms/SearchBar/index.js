import React from 'react'
import qs from 'qs'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { get, reduce, omitBy, isEmpty, pick, forEach, isEqual, omit } from 'lodash'

import Button from '../../atoms/Button'
import Subtitle from '../../atoms/Subtitle'
import LinkButton from '../../atoms/LinkButton'
import SearchFields from '../../molecules/SearchFields'

const Container = styled.form`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => get(theme, 'white', '#FFF')};
  box-shadow: 0 3px 6px 0 rgba(51, 102, 204, 0.15);
  overflow: hidden;
  max-width: 18%;
`

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 16px;
`

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 24px;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
`

const SearchBar = ({ context, count, fields, search, updateSearch }) => {
  const { t } = useTranslation()
  const history = useNavigate()
  const location = useLocation()
  const [showMore, updateShowMore] = useState(false)
  const toggleMore = useCallback(() => updateShowMore(!showMore), [showMore, updateShowMore])

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: reduce(fields, (acc, item) => ({
      ...acc,
      [get(item, 'name')]: get(search, get(item, 'name'), get(item, 'value'))
    }), {}),
    onSubmit: (values) => {
      updateSearch(omitBy(values, (value) => isEmpty(value)))
    }
  })

  useEffect(() => {
    const modifiedValues = reduce(fields, (acc, item) => ({
      ...acc,
      [get(item, 'name')]: get(search, get(item, 'name'), get(item, 'value'))
    }), {})
    forEach(modifiedValues, (value, name) => setFieldValue(name, value))

    const params = qs.parse(get(location, 'search', '').substring(1))
    if (!isEqual(search, omit(params, ['page']))) {
      history.replace(`${get(location, 'pathname', '')}?${qs.stringify({
        ...pick(params, ['page']),
        ...search
      })}`)
    }
  }, [search])

  return (
    <Container onSubmit={handleSubmit}>
      <ScrollContainer>
        <StyledSubtitle>
          {t(`${context}.title`)} ({count})
        </StyledSubtitle>
        <SearchFields
          fields={fields}
          values={values}
          context={context}
          showMore={showMore}
          onChange={handleChange} />
      </ScrollContainer>
      <ButtonsContainer>
        <LinkButton
          color='blue'
          label={showMore ? 'SEARCH.less' : 'SEARCH.more'}
          onClick={toggleMore}
          iconName={showMore ? 'minus' : 'plus'} />
        <Button
          type='submit'
          onClick={() => {}}>
          {t('SEARCH.validate')}
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

SearchBar.propTypes = {
  count: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired,
  search: PropTypes.object.isRequired,
  context: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired
}

export default SearchBar