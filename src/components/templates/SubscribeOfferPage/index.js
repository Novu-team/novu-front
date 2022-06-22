import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

import TabAbonnementIcon from '../../../assets/TabAbonnement.png'
import AdsIcon from '../../../assets/Website-ads.png'
import CrownIcon from '../../../assets/Crown-black.png'
import CGUIntro from '../../organisms/CGUIntro'


const MediumBackground = styled.div`

`

const TabAbonnementImage = styled.img`
  width: 100%;
`

const TitlePage = styled.h1`

`

const IconTitle = styled.img`
  height: 20px;
  padding-right: 10px;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30%;
`

const RowTitle = styled.div`
  display: flex;
  flex-direction: row;
`

const OfferContainer = styled.div`
  display: flex;
  padding: 0 0;
  flex-direction: column;
  background-size: auto 10%;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => get(theme, 'primary', '#FFF')};
`

const SubTitle = styled.h2``

const HeaderSubscribe = styled.div`
  display: flex;
  flex-direction: column;
`

const SubscribeOfferPage = () => {
  return (
    <>
      <OfferContainer>
        <HeaderSubscribe>
          <TitlePage>
            Pourquoi devenir membre
          </TitlePage>
          <TitlePage>
            Novu Prime ?
          </TitlePage>
        </HeaderSubscribe>
        <MainContent>
          <RowTitle>
            <IconTitle src={AdsIcon} />
            <SubTitle>
              Suppression des publicités
            </SubTitle>
          </RowTitle>
          <RowTitle>
            <IconTitle src={CrownIcon} />
            <SubTitle>
              Devenez le Boss et créez vos Events
            </SubTitle>
          </RowTitle>
          <TabAbonnementImage src={TabAbonnementIcon}/>
        </MainContent>
      </OfferContainer>
      <CGUIntro />
    </>

  )
}

export default SubscribeOfferPage