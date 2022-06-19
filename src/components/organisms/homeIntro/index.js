import React from 'react'
import styled from 'styled-components'

import mockUpApp from '../../../assets/mockup_app_novu.png'
import googlePlayAppStore from '../../../assets/google_play_app_store.png'

import HomeSectionTitle from '../../atoms/HomeSectionTitle'
import HomeSectionSubtitle from '../../atoms/HomeSectionSubtitle'

const BackgroundImage = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

const DownloadIndication = styled.img`
  
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Content = styled.div`
  z-index: 1;
  display: flex;
  position: absolute;
  align-items: center;
  left: 90%;
  top: 80%;
  flex-direction: column;
`

const HomeIntro = () => {
  return (
    <>
      <StyledContainer>
        <BackgroundImage src={mockUpApp} />
        <Content>
          <HomeSectionTitle tag='h1'>
            Télécharger <span>Novu</span> pour
          </HomeSectionTitle>
          <HomeSectionTitle tag='h2'>
            Android et Iphone
          </HomeSectionTitle>
          <HomeSectionSubtitle>
            <DownloadIndication src={googlePlayAppStore} />
          </HomeSectionSubtitle>
        </Content>
      </StyledContainer>
    </>
  )
}

export default HomeIntro