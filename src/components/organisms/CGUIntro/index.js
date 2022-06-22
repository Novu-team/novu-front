import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { useNavigate } from 'react-router-dom'

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  height: 10%;
  width: 100%;
  background: ${({ theme }) => get(theme, 'primary', '#FFF')};
`

const TextStyled = styled.p`
  margin: auto;
  color: white;
`

const ButtonToCGU = styled.button`
  margin: auto;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`

const CGUIntro = () => {
  const navigate = useNavigate()
  const goToCGU = () => {
    return navigate('/conditions-generales')
  }

  const goToPolitiqueConfidentialite = () => {
    return navigate('/politique-confidentialite')
  }

  return (
    <FooterDiv>
      <ButtonToCGU onClick={goToCGU}>
        <TextStyled>
          conditions generales d&apos;utilisation
        </TextStyled>
      </ButtonToCGU>
      <ButtonToCGU onClick={goToPolitiqueConfidentialite}>
        <TextStyled>
          Politique de confidentialité
        </TextStyled>
      </ButtonToCGU>
    </FooterDiv>
  )
}

export default CGUIntro