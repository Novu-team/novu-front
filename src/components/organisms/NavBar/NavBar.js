import React from 'react'
import styled from 'styled-components'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { map, get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import logoNovu from '../../../assets/svg/logoNovu.png'
import NavLink from '../../molecules/NavLink'
import userToken from '../../../redux/selectors/userToken'
import RoundButton from '../../atoms/RoundButton'
import { User } from '../../../assets/svg'
import { logoutUser } from '../../../redux/slices/authentication'

const NAV = [{
  id: '/users',
  path: '/users',
  label: 'Utilisateurs',
  component: User,
}, {
  id: '/tags',
  path: '/tags',
  label: 'Tags',
  iconName: ['far', 'list-alt'],
}, {
  id: '/listes',
  path: '/listes',
  label: 'Listes',
  iconName: 'chart-bar'
}]

const Logo = styled.img`
  margin-right: 16px;
  height: 25px;
`

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 32px;
  box-shadow: 0 3px 6px 0 rgba(51, 102, 204, 0.15);
  background-color: ${({ theme }) => get(theme, 'white', '#FFF')};
  z-index: 10;
`

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledRoundButton = styled(RoundButton)`
  margin-left: 16px;
`

const NavLinks = () => {
  const location = useLocation()
  const pathName = get(location, 'pathname', '/')

  return map(NAV, item => (
    <NavLink key={get(item, 'id')} item={item} pathName={pathName} />
  ))
}

const NavBar = () => {
  const token = useSelector(userToken)
  const dispatch = useDispatch()
  const onLogout = useCallback(() => dispatch(logoutUser()), [dispatch])
  const navigate = useNavigate()
  const goToHome = () => {
    return navigate('/')
  }

  if (!token) {
    return null
  }

  return (
    <Container>
      <ContainerRow>
        <Logo src={logoNovu} onClick={goToHome} />
        <NavLinks />
      </ContainerRow>
      <ContainerRow>
        <StyledRoundButton
          color='primary'
          borderColor='blue'
          iconName='user-shield' />
        <StyledRoundButton
          color='alert'
          onClick={onLogout}
          iconName='sign-out-alt'
          borderColor='brightOrange' />
      </ContainerRow>
    </Container>
  )
}

export default NavBar