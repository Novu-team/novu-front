import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { useTranslation } from 'react-i18next'

import BadgeIcon from '../BadgeIcon'


const Link = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const Text = styled.span`
  color: ${({ theme, color }) => get(theme, color, '#FFF')};
  margin-left: 8px;
  font-size: 16px;
  font-weight: 600;
  user-select: none;
`

const LinkButton = ({ color, label, iconName, onClick }) => {
  const { t } = useTranslation()

  return (
    <Link
      data-testid='linkButton'
      onClick={onClick}>
      <BadgeIcon
        color={color}
        iconName={iconName} />
      <Text color={color}>
        {t(label)}
      </Text>
    </Link>
  )
}

LinkButton.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconName: PropTypes.string.isRequired
}

LinkButton.defaultProps = {
  onClick: () => {}
}

export default LinkButton