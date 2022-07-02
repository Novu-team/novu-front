import React, { useState } from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import Form from '../../atoms/Form'
import Error from '../../atoms/Error'
import Input from '../../atoms/Input'
import Title from '../../atoms/Title'
import Button from '../../atoms/Button'
import logoNovu from '../../../assets/svg/Logo.svg'
import authErrorSelector from '../../../redux/selectors/authError'
import { loginUser } from '../../../redux/slices/authentication'
import { useNavigate } from 'react-router-dom'
import Toast from '../../molecules/Toast/Toast'
import { TOAST_PROPERTIES } from '../../molecules/Toast/toastProperties'

const Logo = styled.img`
  width: auto;
  height: 200px;
`

const loginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required()
})

const StyledInput = styled(Input)`
  margin: 8px;
  width: 200px;
`

const StyledButton = styled(Button)`
  margin: 8px;
`

const ContainerRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  padding: 40px;
  background: #FFF;
  display: flex;
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  flex: 1;
  flex-grow: inherit;
  box-shadow: 0 3px 6px 0 rgba(51, 102, 204, 0.15);
`

const Container2 = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const CenteredTitle = styled(Title)`
  margin-bottom: 40px;
  white-space: nowrap;
`

const StyledForm = styled(Form)`
  margin-left: 24px;
`

const Login = () => {
  const [toasts, setList] = useState([]);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authError = useSelector(authErrorSelector)

  const showToast = ({ type, description, titleToast }) => {
    const toastProperties = TOAST_PROPERTIES.find((toast) => toast.title.toLowerCase() === type);

    setList([...toasts, { ...toastProperties, description, titleToast }]);
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const loginRequest = loginUser(values)
        const loginResult = await dispatch(loginRequest)

        if (get(loginResult, 'error')) {
          throw Error('goToForbidden')
        }

        showToast({ type: 'success',
          titleToast: 'Success',
          description: 'Login réussi'
        })

        return setTimeout(() => navigate('/users'), 1000)
      } catch (e) {
        const statusErrorCode = get(e, 'response.status', '403')

        return showToast({ type: 'danger',
          titleToast: `Erreur ${statusErrorCode}`,
          description: 'Mauvais identifiant ou mot de passe'
        })
      }
    }
  })

  return (
    <ContainerRoot>
      <Toast toastList={toasts} position={'top-right'} />
      <Container>
        <Logo src={logoNovu} />
        <CenteredTitle color='primary'>Connexion</CenteredTitle>
        <Container2>
          <StyledForm>
            <Error error={authError}/>
            <StyledInput
              type='text'
              name='email'
              error={!!get(errors, 'email')}
              label="Nom d'utilisateur"
              value={get(values, 'email')}
              onChange={handleChange} />
            <StyledInput
              type='password'
              name='password'
              error={!!get(errors, 'password')}
              label='Mot de passe'
              value={get(values, 'password')}
              onChange={handleChange} />
            <StyledButton background={'primary'} color={'white'} onClick={handleSubmit}>Valider</StyledButton>
          </StyledForm>
        </Container2>
      </Container>
    </ContainerRoot>
  )
}

export default Login