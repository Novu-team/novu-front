import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { map, groupBy, get, isEqual, filter } from 'lodash'

import Input from '../../atoms/Input'
import Center from '../../atoms/Center'
import { useTranslation } from 'react-i18next'

const StyledInput = styled(Input)`
  margin: 8px 0;
  min-width: 100%;
  max-width: 100%;
`

const StyledCenter = styled(Center)`
  flex-direction: column;
`

const Divider = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  color: ${({ theme }) => get(theme, 'grey')};
  background: ${({ theme }) => get(theme, 'grey')};
  margin-left: 0;
`

const Title = styled.span`
  align-self: flex-start;
`

const GroupTitle = ({ title, context }) => {
  const { t } = useTranslation()
  if (isEqual(title, 'common')) {
    return null
  }

  return (
    <>
      <Divider />
      <Title>{t([`${context}.${title}`, `COMMON.${title}`])}</Title>
    </>
  )
}

GroupTitle.propTypes = {
  title: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired
}

const SearchFields = ({ values, fields, showMore, context, onChange }) => {
  if (!showMore) {
    return (
      <StyledCenter>
        {map(filter(fields, field => isEqual(get(field, 'group'), 'common')), input => (
          <StyledInput
            key={get(input, 'name')}
            type={get(input, 'type')}
            name={get(input, 'name')}
            label={get(input, 'label')}
            value={get(values, get(input, 'name'))}
            onChange={onChange} />
        ))}
      </StyledCenter>
    )
  }

  return map(groupBy(fields, 'group'), (group, title) =>
    <StyledCenter key={title}>
      <GroupTitle
        title={title}
        context={context} />
      {map(group, input => (
        <StyledInput
          key={get(input, 'name')}
          type={get(input, 'type')}
          name={get(input, 'name')}
          label={get(input, 'label')}
          value={get(values, get(input, 'name'))}
          onChange={onChange} />
      ))}
    </StyledCenter>
  )
}

SearchFields.propTypes = {
  fields: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  context: PropTypes.any,
  showMore: PropTypes.bool.isRequired
}

export default SearchFields