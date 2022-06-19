import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'
import { get, isEqual, isEmpty, reduce, map, includes } from 'lodash'

import Icon from '../../atoms/Icon'

const IconLink = styled(Icon)`
  && {
    margin-right: 8px;
    width: auto;
    height: 20px;
  }
`

const StyledLink = styled(Link)`
  margin: 0 32px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme, $isSelected }) => get(theme, $isSelected ? 'primary' : 'grey', '#FFF')};
`

const LinkToggle = styled(StyledLink)`
  margin-top: 15px;
  margin-bottom: 15px;
`

const StyledTitle = styled.div`
  margin: 0 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme, $isSelected }) => get(theme, $isSelected ? 'primary' : 'grey', '#FFF')};
`

const ListContainer = styled.div`
  position: absolute;
  top: 50px;
  z-index: 1000;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
`

const getIsSelected = (path, pathName, list, id) => {
  if (isEmpty(list)) {
    return isEqual(path, pathName) || includes(pathName, id)
  }

  if (includes(pathName, id)) {
    return true
  }

  return reduce(list, (acc, item) => acc || isEqual(get(item, 'path'), pathName), false)
}

const NavList = ({ list, show, pathName, toggleShow }) => {
  const { t } = useTranslation()

  if (!show) {
    return null
  }

  return (
    <ListContainer>
      {map(list, ({ label, path }) => (
        <LinkToggle
          to={path}
          key={`${label}-${path}`}
          onClick={toggleShow}
          $isSelected={getIsSelected(path, pathName)}>
          <span>
            {t(label)}
          </span>
        </LinkToggle>
      ))}
    </ListContainer>
  )
}

NavList.propTypes = {
  show: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  pathName: PropTypes.string.isRequired,
  toggleShow: PropTypes.func.isRequired
}

const NavToggle = ({ list, label, isSelected, iconName, component, pathName }) => {
  const { t } = useTranslation()
  const node = useRef()
  const [show, updateShow] = useState(false)

  const toggleShow = () => updateShow(!show)

  const handleClick = ({ target }) => {
    if (node.current.contains(target)) {
      return
    }

    updateShow(false)
  }

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  console.log(label)

  return (
    <div ref={node}>
      <StyledTitle
        onClick={toggleShow}
        $isSelected={isSelected}>
        <IconLink
          color={isSelected ? 'blue' : 'grey'}
          iconName={iconName}
          component={component} />
        <span>
          {t(label)}
        </span>
      </StyledTitle>
      <NavList
        list={list}
        show={show}
        pathName={pathName}
        toggleShow={toggleShow} />
    </div>
  )
}

NavToggle.propTypes = {
  list: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  component: PropTypes.func
}

NavToggle.defaultProps = {
  iconName: '',
  component: undefined
}

const NavLink = ({ item, pathName }) => {
  const { t } = useTranslation()
  const id = get(item, 'id', '/')
  const path = get(item, 'path', '/')
  const list = get(item, 'list', [])
  const label = get(item, 'label')
  const iconName = get(item, 'iconName', '')
  const component = get(item, 'component')
  const isSelected = getIsSelected(id, pathName, list, id)

  if (!isEmpty(list)) {
    return (
      <NavToggle
        list={list}
        label={label}
        pathName={pathName}
        iconName={iconName}
        component={component}
        isSelected={isSelected} />
    )
  }

  return (
    <StyledLink
      to={path}
      $isSelected={isSelected}>
      <IconLink
        color={isSelected ? 'primary' : 'grey'}
        iconName={iconName}
        component={component} />
      <span>
        {t(label)}
      </span>
    </StyledLink>
  )
}

NavLink.propTypes = {
  item: PropTypes.object.isRequired,
  pathName: PropTypes.string.isRequired
}

export default NavLink