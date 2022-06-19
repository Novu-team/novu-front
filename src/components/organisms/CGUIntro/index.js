import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { useNavigate } from 'react-router-dom'

const FooterDiv = styled.div`
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
    return navigate('/politique-confidentialite')
  }

  return (
    <FooterDiv>
      <ButtonToCGU onClick={goToCGU}>
        <TextStyled>
          Mentions Légales
        </TextStyled>
      </ButtonToCGU>
    </FooterDiv>
  )
}

export default CGUIntro