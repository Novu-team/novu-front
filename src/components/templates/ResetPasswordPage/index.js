import React, { useState } from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'

import Form from '../../atoms/Form'
import Input from '../../atoms/Input'
import Title from '../../atoms/Title'
import Button from '../../atoms/Button'
import logoNovu from '../../../assets/svg/Logo.svg'
import createAxiosInstance from '../../../utils/http'
import Toast from '../../molecules/Toast/Toast'
import { TOAST_PROPERTIES } from '../../molecules/Toast/toastProperties'

const Logo = styled.img`
  width: auto;
  height: 200px;
`

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Veuillez renseigner un nouveau mot de passe')
    .min(8, 'Le mot de passe doit faire 8 caractères au minimum')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
      'Le mot de passe doit contenir au moins une majuscule'
    ),
  confirmPassword: Yup.string()
    .required('Veuillez confirmer le mot de passe')
    .oneOf([Yup.ref('password'), null],
      'Les mots de passe doivent correspondre')
})

const StyledInput = styled(Input)`
  margin: 8px;
  width: 260px;
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
  flex-direction: column;
`

const CenteredTitle = styled(Title)`
  margin-bottom: 40px;
  white-space: nowrap;
`

const StyledForm = styled(Form)`
  margin-left: 24px;
`

const ErrorMessageStyled = styled.p`
  color: red;
  padding-top: 20px;
`

const ResetPasswordPage = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const token = queryParams.get('token')

  const [toasts, setList] = useState([]);

  const showToast = ({ type, description, titleToast }) => {
    const toastProperties = TOAST_PROPERTIES.find((toast) => toast.title.toLowerCase() === type);

    setList([...toasts, { ...toastProperties, description, titleToast }]);
  }

  const changePassword = async (token, password) => {
    const instance = createAxiosInstance()
    await instance.put(`/api/user/changePassword`, {
      token,
      password
    })
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await changePassword(token, get(values, 'password'))

        return showToast({ type: 'success',
          titleToast: 'Success',
          description: 'Changement de mot de passe réussie'
        })
      } catch (e) {
        const statusErrorCode = get(e, 'response.status', '400')
        return showToast({ type: 'danger',
          titleToast: `Erreur ${statusErrorCode}`,
          description: 'Le mot de passe n\'a pas pu être changé'
        })
      }
    }
  })

  return (
    <ContainerRoot>
      <Toast toastList={toasts} position={'top-right'} />
      <Container>
        <Logo src={logoNovu} />
        <CenteredTitle color="primary">Réinitialisez votre mot de passe</CenteredTitle>
        <Container2>
          <StyledForm>
            <StyledInput
              type="password"
              name="password"
              error={!!get(errors, 'password')}
              label="Mot de passe"
              value={get(values, 'password')}
              onChange={handleChange} />
            <StyledInput
              type="password"
              name="confirmPassword"
              error={!!get(errors, 'confirmPassword')}
              label="Confirmez le mot de passe"
              value={get(values, 'confirmPassword')}
              onChange={handleChange} />
            <Container2>
              {Object.values(errors).map((msg, index) => (
                <ErrorMessageStyled key={index}>
                  {msg}
                  <br />
                </ErrorMessageStyled>
              ))}
            </Container2>
            <StyledButton type={'submit'} background={'primary'} color={'white'}
                          onClick={handleSubmit}>Valider</StyledButton>
          </StyledForm>
        </Container2>
      </Container>
    </ContainerRoot>
  )
}

export default ResetPasswordPage