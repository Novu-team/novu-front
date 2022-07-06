import React, { useState } from 'react'
import styled from 'styled-components'
import { get, startCase, camelCase } from 'lodash'
import { useFormik } from 'formik'

import Form from '../../atoms/Form'
import Input from '../../atoms/Input'
import Title from '../../atoms/Title'
import Button from '../../atoms/Button'
import logoNovu from '../../../assets/svg/Logo.svg'
import Toast from '../../molecules/Toast/Toast'
import { TOAST_PROPERTIES } from '../../molecules/Toast/toastProperties'
import { useDispatch, useSelector } from 'react-redux'
import userToken from '../../../redux/selectors/userToken'
import createInstance from '../../../utils/http'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const Logo = styled.img`
  width: auto;
  height: 200px;
`

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

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email n est pas au bon format')
    .max(255)
    .required('Un email est requis'),
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

const CreateAdmin = () => {
  const dispatch = useDispatch()
  const instance = createInstance(dispatch)
  const token = useSelector(userToken)
  const navigate = useNavigate()
  const [toasts, setList] = useState([])

  const showToast = ({ type, description, titleToast }) => {
    const toastProperties = TOAST_PROPERTIES.find((toast) => toast.title.toLowerCase() === type);

    setList([...toasts, { ...toastProperties, description, titleToast }]);
  }

  const createAdmin = async (email, password, firstname, phoneNumber, trigram, name, birthday, admin) => {
    await instance.post(`/api/users`, {
      email,
      password,
      firstname,
      phoneNumber,
      trigram,
      name,
      birthday,
      admin
    }, { headers: { 'AUTHORIZATION': `Bearer ${token}` } })
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      phoneNumber: '',
      trigram: 'AAA',
      name: '',
      birthday: '2022-06-05',
      admin: true
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const { email, password, firstname, name, phoneNumber, trigram, birthday, admin } = values

        await createAdmin(email, password, firstname, phoneNumber, trigram, name, birthday, admin)

        showToast({ type: 'success',
          titleToast: 'Success',
          description: 'Creation du compte réussie'
        })

        return setTimeout(() => navigate('/users'), 1000)
      } catch (e) {
        const statusErrorCode = get(e, 'response.status', '400')
        return showToast({ type: 'danger',
          titleToast: `Erreur ${statusErrorCode}`,
          description: get(e, 'response.data', 'Échec de la creation du compte admin')
        })
      }
    }
  })

  return (
    <ContainerRoot>
      <Toast toastList={toasts} position={'top-right'} />
      <Container>
        <Logo src={logoNovu} />
        <CenteredTitle color="primary">Création d&apos;un Admin</CenteredTitle>
        <Container2>
          <StyledForm>
            <StyledInput
              type="text"
              name="firstname"
              label="Prénom"
              value={get(values, 'firstname')}
              onChange={handleChange} />
            <StyledInput
              type="text"
              name="name"
              label="Nom"
              value={get(values, 'name')}
              onChange={handleChange} />
            <StyledInput
              type="text"
              name="email"
              label="Email"
              value={get(values, 'email')}
              onChange={handleChange} />
            <StyledInput
              type="text"
              name="phoneNumber"
              label="Telephone"
              value={get(values, 'phoneNumber')}
              onChange={handleChange} />
            <StyledInput
              type="password"
              name="password"
              label="Mot de passe"
              value={get(values, 'password')}
              onChange={handleChange} />
            <StyledInput
              type="password"
              name="confirmPassword"
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

export default CreateAdmin