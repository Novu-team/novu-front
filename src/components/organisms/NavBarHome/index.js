import React from 'react'
import styled from 'styled-components'
import { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { map, get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import logoNovu from '../../../assets/svg/logoNovu.png'
import NavLink from '../../molecules/NavLink'
import userToken from '../../../redux/selectors/userToken'
import RoundButton from '../../atoms/RoundButton'
import InstaLogo from '../../../assets/Insta.png'

const NAV = [{
  id: '/mobileApp',
  path: '/mobileApp',
  label: 'App mobile'
}, {
  id: '/subscribe',
  path: '/subscribe',
  label: 'Abonnements'
}, {
  id: '/statistics',
  path: '/statistics',
  label: 'Contact'
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
  margin: 0 16px;
`

const NavLinks = () => {
  const location = useLocation()
  const pathName = get(location, 'pathname', '/')

  return map(NAV, item => (
    <NavLink key={get(item, 'id')} item={item} pathName={pathName} />
  ))
}

const NavBarHome = () => {
  const token = useSelector(userToken)
  const navigate = useNavigate()
  const goToLogin = () => {
    return navigate('/login')
  }

  const goToHome = () => {
    return navigate('/')
  }

  if (token) {
    return null
  }

  return (
    <Container>
      <Logo src={logoNovu} onClick={goToHome} />
      <ContainerRow>
        <NavLinks />
        <StyledRoundButton
          color='primary'
          onClick={goToLogin}
          borderColor='blue'
          iconName='user-shield' />
        <Logo src={InstaLogo} />
      </ContainerRow>
    </Container>
  )
}

export default NavBarHome