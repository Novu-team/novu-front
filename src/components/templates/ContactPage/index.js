import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

import GCUIntro from '../../organisms/CGUIntro'


const ContactContainer = styled.div`
  display: flex;
  padding: 10vh 25vh;
  background-size: cover;
  justify-content: space-around;
  flex-direction: row;
`

const CircleContainer = styled.div`
  background-color: ${({ theme }) => get(theme, 'primary', '#FFF')};
  border-radius: 50%;
  height: 25vh;
  width: 25vh;
  text-align: center;
`

const CircleImage = styled.img`
`

const TitleName = styled.h1`

`

const TextRole = styled.p`

`

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

const ContactPage = () => {
  return (
    <>
      <ContactContainer>
        <ProfilContainer>
          <CircleContainer>
            <CircleImage />
          </CircleContainer>
          <TitleName>
            JEAN GRAINDORGE
          </TitleName>
          <TextRole>
            Fondateur
          </TextRole>
        </ProfilContainer>
        <ProfilContainer>
          <CircleContainer>
            <CircleImage />
          </CircleContainer>
          <TitleName>
            ETIENNE DE CASABIANCA
          </TitleName>
          <TextRole>
            Fondateur
          </TextRole>
        </ProfilContainer>
      </ContactContainer>
      <GCUIntro />
    </>
  )
}

export default ContactPage