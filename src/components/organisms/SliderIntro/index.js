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


const SliderContainer = styled.div`
  padding: 40px 40px;
  background: ${({ theme }) => get(theme, 'primary', '#FFF')} no-repeat fixed center;

  background-size: cover;
`

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

const BottomSliderContainer = styled.div`
  z-index: 1;
  top: 25vh;
  position: absolute;
  align-items: center;
  flex-direction: column;
`

const TitleSliderText = styled.h1`
  color: white;
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

const MainTitleText = styled.h1`
  color: white;
  font-size: 30px;
  margin: auto;
`


const sliderPictures = [
  {
    image: HebergementPicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: DatePicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: ParticipantsGif, // Participants
    title: '',
    content: '',
    icon: ''
  }, {
    image: DepensesPicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: ActivitesGif, // Activités
    title: '',
    content: '',
    icon: ''
  }, {
    image: ValisesPicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: CoursesPicture,
    title: '',
    content: '',
    icon: ''
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
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          L'APP COLLABORATIVE POUR TES SÉJOURS.
        </MainTitleText>
      </MainTitleContainer>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}>
        { map(sliderPictures, (item, key) => {
          return <div style={{ height: '50vh', background: '#EEE' }}>
            <BottomSliderContainer>
              <TitleSliderText>Test</TitleSliderText>
            </BottomSliderContainer>
            <BackgroundImage src={get(item, 'image')} />
          </div>
        })}
      </ItemsCarousel>
      <SliderContainerBar>
        <SliderNovuImage
          value={activeItemIndex}
          min={0}
          max={3}
          onChange={onImageSliderChange}
          valueLabelDisplay="auto"
        />
      </SliderContainerBar>
    </SliderContainer>
  );

}

export default SliderIntro