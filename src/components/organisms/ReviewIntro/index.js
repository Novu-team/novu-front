import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import RowImageDescription from '../../molecules/RowImageDescription'
import GuillemetsImg from '../../../assets/svg/Guillemets.svg'

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
  descriptions: 'TESSSSt',
  image: GuillemetsImg
}, {
  title: 'Meilleure isolation thermique',
  descriptions: '',
  image: GuillemetsImg
}, {
  title: 'Performances écologiques améliorées',
  descriptions: '',
  image: GuillemetsImg
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
