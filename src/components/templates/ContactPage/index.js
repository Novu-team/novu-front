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

const TitleName = styled.p`
  font-weight: lighter;
  font-size: 25px;
  padding: 20px;
`

const TextRole = styled.p`
  font-style: italic;
  font-weight: bold;
`

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LinkContactEmail = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica;
  font-weight: lighter;
  font-size: 40px;
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
      <LinkContactEmail>lorepipsum@novu-app.com</LinkContactEmail>
      <GCUIntro />
    </>
  )
}

export default ContactPage