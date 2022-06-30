import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import Form from '../../atoms/Form'
import Input from '../../atoms/Input'
import Title from '../../atoms/Title'
import Button from '../../atoms/Button'
import logoNovu from '../../../assets/svg/Logo.svg'

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
`

const CenteredTitle = styled(Title)`
  margin-bottom: 40px;
  white-space: nowrap;
`

const StyledForm = styled(Form)`
  margin-left: 24px;
`

const ResetPasswordPage = () => {
  const dispatch = useDispatch()

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //await dispatch(loginUser(values))
      console.log(values)
      //return console.log('champs envoyé')
    }
  })

  return (
    <ContainerRoot>
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
              {Object.values(errors).map(msg => (
                <>
                  {msg}
                  <br />
                </>
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