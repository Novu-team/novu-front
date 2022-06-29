import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Tags from '../components/templates/Tags'
import Home from "../components/templates/Home/home"
import Login from '../components/templates/Login'
import Users from '../components/templates/Users'
import NavBar from '../components/organisms/NavBar/NavBar'
import CGUPage from '../components/templates/CGUPage'
import AuthRoute from '../components/molecules/AuthRoute'
import userToken from '../redux/selectors/userToken'
import NavBarHome from '../components/organisms/NavBarHome'
import PolitiqueConfidentialitePage from '../components/templates/PolitiqueConfidentialitePage'
import ContactPage from '../components/templates/ContactPage'
import SubscribeOfferPage from '../components/templates/SubscribeOfferPage'
import ResetPasswordPage from '../components/templates/ResetPasswordPage'

const Container = styled.div`
  padding-top: calc(40px + 16px + 9px);
  height: 100%;
`

const AppRouter = () => {
  const token = useSelector(userToken)

  return (
    <Router>
      <NavBar />
      <NavBarHome />
      <Container token={token}>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='mobileApp' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='subscribe' element={<SubscribeOfferPage />} />
          <Route path='resetPassword' element={<ResetPasswordPage />} />
          <Route path='conditions-generales' element={<CGUPage />} />
          <Route path='politique-confidentialite' element={<PolitiqueConfidentialitePage />} />
          <Route isLogged={false} path='/' element={<AuthRoute />}>
            <Route path='users' element={<Users />} />
            <Route path='tags' element={<Tags />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default AppRouter