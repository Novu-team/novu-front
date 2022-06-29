import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import RowImageDescription from '../../molecules/RowImageDescription'
import GuillemetsImg from '../../../assets/svg/Guillemets.svg'
import QuotationIcon from '../../../assets/svg/quote-mark-svgrepo-com-mini.svg'

const GiantTitle = styled.h1`
  color: white;
  font-size: 200px;
  text-align: end;
  padding-bottom: 30px;
`

const SubGiantTitle = styled.p`
  font-size: 75px;
  color: white;
  text-indent: 75%;
`

const ReviewContainer = styled.div`
  height: 100%;
  background: ${({ theme }) => get(theme, 'darkBlue', '#FFF')} no-repeat fixed center;
  background-size: cover;
`

const DATA = [{
  title: 'Avantages fiscaux',
  descriptions: 'Etant une personne peu organisé, l application m a permit de bien m organiser',
  image: QuotationIcon
}, {
  title: 'Meilleure isolation thermique',
  descriptions: '',
  image: QuotationIcon
}, {
  title: 'Performances écologiques améliorées',
  descriptions: '',
  image: QuotationIcon
}]

const ReviewIntro = () => {
  return (
    <>
      <ReviewContainer>
        <div>
          <GiantTitle>
            Déjà
          </GiantTitle>
          <SubGiantTitle>
            adoptée
          </SubGiantTitle>
        </div>

        <RowImageDescription data={DATA} />
      </ReviewContainer>

    </>

  )
}

export default ReviewIntro
