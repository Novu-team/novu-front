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

const CreateTag = () => {
  const dispatch = useDispatch()
  const instance = createInstance(dispatch)
  const token = useSelector(userToken)
  const navigate = useNavigate()
  const [toasts, setList] = useState([])

  const showToast = ({ type, description, titleToast }) => {
    const toastProperties = TOAST_PROPERTIES.find((toast) => toast.title.toLowerCase() === type);

    setList([...toasts, { ...toastProperties, description, titleToast }]);
  }

  const createTag = async (name, type) => {
    await instance.put(`/api/tag`, {
      name: startCase(camelCase(name)),
      type: startCase(camelCase(type)),
    }, { headers: { 'AUTHORIZATION': `Bearer ${token}` } })
  }

  const { values, _, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      type: ''
    },
    onSubmit: async (values) => {
      try {
        const { name, type } = values

        await createTag(name, type)

        showToast({ type: 'success',
          titleToast: 'Success',
          description: 'Creation du tag réussie'
        })

        return setTimeout(() => navigate('/tags'), 1000)
      } catch (e) {
        const statusErrorCode = get(e, 'response.status', '400')
        return showToast({ type: 'danger',
          titleToast: `Erreur ${statusErrorCode}`,
          description: 'Échec de la creation du tag'
        })
      }
    }
  })

  return (
    <ContainerRoot>
      <Toast toastList={toasts} position={'top-right'} />
      <Container>
        <Logo src={logoNovu} />
        <CenteredTitle color="primary">Création d&apos;un tag</CenteredTitle>
        <Container2>
          <StyledForm>
            <StyledInput
              type="text"
              name="name"
              label="Nom du tag"
              value={get(values, 'name')}
              onChange={handleChange} />
            <StyledInput
              type="text"
              name="type"
              label="Catégorie du tag"
              value={get(values, 'type')}
              onChange={handleChange} />
            <StyledButton type={'submit'} background={'primary'} color={'white'}
                          onClick={handleSubmit}>Valider</StyledButton>
          </StyledForm>
        </Container2>
      </Container>
    </ContainerRoot>
  )
}

export default CreateTag