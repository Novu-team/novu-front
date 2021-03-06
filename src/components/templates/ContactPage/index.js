import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

import GCUIntro from '../../organisms/CGUIntro'
import JeanImage from '../../../assets/Jean.jpg'
import EtienneImage from '../../../assets/Etienne.jpg'
import media from '../../../utils/media'

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

  ${media.lessThan('sm')`
    height: 25vw;
    width: 25vw;
  `}
`

const CircleImage = styled.img`
  max-width:100%;
  max-height:100%;
  border-radius: 50%;
`

const TitleName = styled.p`
  font-weight: lighter;
  font-size: 25px;
  padding: 20px;
  text-align: center;
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
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica;
  font-weight: lighter;
  font-size: 40px;

  ${media.lessThan('sm')`
    font-size: 32px;
  `}
`

const ContactPage = () => {
  return (
    <>
      <ContactContainer>
        <ProfilContainer>
          <CircleContainer>
            <CircleImage src={JeanImage} />
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
            <CircleImage src={EtienneImage} />
          </CircleContainer>
          <TitleName>
            ETIENNE DE CASABIANCA
          </TitleName>
          <TextRole>
            Fondateur
          </TextRole>
        </ProfilContainer>

      </ContactContainer>
      <LinkContactEmail>support@novu-app.com</LinkContactEmail>
      <GCUIntro />
    </>
  )
}

export default ContactPage