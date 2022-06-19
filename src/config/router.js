import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from "../components/templates/Home/home"
import Login from '../components/templates/Login'
import Users from '../components/templates/Users'
import NavBar from "../components/organisms/NavBar/NavBar"
import AuthRoute from '../components/molecules/AuthRoute'
import { useSelector } from 'react-redux'
import userToken from '../redux/selectors/userToken'
import NavBarHome from '../components/organisms/NavBarHome'
import Tags from '../components/templates/Tags'
import CGUPage from '../components/templates/CGUPage'

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
          <Route exact path='' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/politique-confidentialite' element={<CGUPage />} />
          <Route isLogged={false} exact path='/' element={<AuthRoute />}>
            <Route exact path='/users' element={<Users />} />
            <Route exact path='/tags' element={<Tags />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default AppRouter