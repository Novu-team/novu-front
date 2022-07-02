import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import media from '../../../utils/media'

import RowImageDescription from '../../molecules/RowImageDescription'
import QuotationIcon from '../../../assets/svg/quote-mark-svgrepo-com-mini.svg'

const GiantTitle = styled.h1`
  color: white;
  font-size: 200px;
  text-align: end;
  padding-bottom: 30px;

  ${media.lessThan('sm')`
     font-size: 150px;
     text-align: center;
  `}
`

const SubGiantTitle = styled.p`
  font-size: 75px;
  color: white;
  padding-bottom: 20px;
`

const ReviewContainer = styled.div`
  height: 100%;
  background: ${({ theme }) => get(theme, 'darkBlue', '#FFF')} no-repeat fixed center;
  background-size: cover;
  padding-bottom: 100px;
`

const TestDiv = styled.div`
  float: right;

  ${media.lessThan('sm')`
     float: none;
  `}
`

const DATA = [{
  title: 'Centralisation complète',
  descriptions: 'J\'adore à quel point la plateforme est conviviale, et la facilité avec laquelle on peut gérer les voyages dans un seul et même endroit',
  icon: QuotationIcon,
  author: '@JeremyTernisien'
}, {
  title: 'Facilité d\'utilisation',
  descriptions: 'Moi qui ne suit pas adepte des applications mobiles, Novu ne m\'a posé aucun problème d\'utilisation ! Merci Novu',
  icon: QuotationIcon,
  author: '@JamesBertho'
}, {
  title: 'Rapidité d\'organisation',
  descriptions: 'Réserver nos voyages était un cauchemar, et maintenant grâce à Novu, c\'est un parti de plaisir et un gain de temps !',
  icon: QuotationIcon,
  author: '@LucasPothier'
}]

const ReviewIntro = () => {
  return (
    <ReviewContainer>
      <TestDiv>
        <GiantTitle>
          Déjà
        </GiantTitle>
        <SubGiantTitle>
          adoptée
        </SubGiantTitle>
      </TestDiv>
      <RowImageDescription data={DATA} />
    </ReviewContainer>
  )
}

export default ReviewIntro
