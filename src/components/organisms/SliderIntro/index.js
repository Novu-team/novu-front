import React, { useState } from 'react'
import styled from 'styled-components'
import ItemsCarousel from 'react-items-carousel'
import { Slider } from '@mui/material'
import { styled as styledMaterialUi } from '@mui/system'
import { get, map } from 'lodash'

import HebergementPicture from '../../../assets/hebergement.jpg'
import ValisesPicture from '../../../assets/Valises.jpg'
import DepensesPicture from '../../../assets/Dépenses.jpg'
import DatePicture from '../../../assets/Dates.jpg'
import CoursesPicture from '../../../assets/Courses.jpg'
import ActivitesGif from '../../../assets/Activites.gif'
import ParticipantsGif from '../../../assets/Participants.gif'
import BackgroundCarousel from '../../molecules/BackgroundCarousel'

import LocationIcon from '../../../assets/svg/house-rental-black-mini-mini.svg'
import CalendarIcon from '../../../assets/svg/calendar-svgrepo-com-mini.svg'
import BagIcon from '../../../assets/svg/dollar-black-mini.svg'
import ParticipantIcon from '../../../assets/svg/user-group-svgrepo-com-mini.svg'
import ActivityIcon from '../../../assets/svg/basket-ball-black-mini.svg'
import SuitcaseIcon from '../../../assets/svg/suitcase-svgrepo-com-mini.svg'
import ShoppingCartIcon from '../../../assets/svg/trolley-black-mini.svg'

const SliderContainer = styled.div`
  padding: 40px 40px;
  background: ${({ theme }) => get(theme, 'primary', '#FFF')} no-repeat fixed center;

  background-size: cover;
`

const SliderNovuImage = styledMaterialUi(Slider)({
  color: '#fff',
  '& .MuiSlider-valueLabelLabel': {
    'color': '#008A92FF'
  },
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#008A92FF',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#fff',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
})

const SliderContainerBar = styled.div`
  padding-top: 40px;
`

const MainTitleContainer = styled.div`
  display: flex;
  padding-bottom: 40px;
`

const MainTitleText = styled.p`
  color: white;
  font-size: 30px;
  margin: auto;
`


const sliderPictures = [
  {
    image: HebergementPicture,
    title: 'Logement.',
    content: ['Proposez, votez pour sélectionner votre logement.', ' Consultez les informations liées au logement à tout moment.'],
    icon: LocationIcon
  }, {
    image: DatePicture,
    title: 'Dates.',
    content: ['Indiquez vos disponibilités.', 'Choisissez les dates optimales du séjour.'],
    icon: CalendarIcon
  }, {
    image: ParticipantsGif,
    title: 'Participants.',
    content: ['Consultez toutes les informations de chaque participant.', ''],
    icon: ParticipantIcon
  }, {
    image: DepensesPicture,
    title: 'Dépenses.',
    content: ['Suivez vos dépenses tout au long du séjour.', 'Divisez automatiquement les dépenses pour faciliter les remboursements'],
    icon: BagIcon
  }, {
    image: ActivitesGif,
    title: 'Activités.',
    content: ['Proposez des activités au reste des participants', 'Indiquez votre participation à l’activité de votre choix'],
    icon: ActivityIcon
  }
]

const SliderIntro = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const onImageSliderChange = (e) => {
    return setActiveItemIndex(e.target.value)
  }

  return (
    <SliderContainer>
      <MainTitleContainer>
        <MainTitleText>
          L&apos;APP COLLABORATIVE POUR TES SÉJOURS.
        </MainTitleText>
      </MainTitleContainer>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}>
        { map(sliderPictures, (item, key) => {
          return <div style={{ height: '50vh', background: '#EEE' }}>
            <BackgroundCarousel item={item} onClick={(item) => activateBlurEffect(item)} />
          </div>
        })}
      </ItemsCarousel>
      <SliderContainerBar>
        <SliderNovuImage
          value={activeItemIndex}
          min={0}
          max={1}
          onChange={onImageSliderChange}
          valueLabelDisplay="auto"
        />
      </SliderContainerBar>
    </SliderContainer>
  );

}

export default SliderIntro