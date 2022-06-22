import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { isEqual, get } from 'lodash'

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  background-color: rgba(0,0,0,1)
  opacity: 0.5;
`


const BottomSliderContainer = styled.div`
  z-index: 1;
  top: 25vh;
  align-items: center;
  flex-direction: column;
  position:relative;
`

const TitleSliderText = styled.h1`
  color: white;
  position:absolute;
  bottom: 10%;
  left: 90%;
`

// const CoverImage = styled.div`
//   background-color: ${({ toggle }) => isEqual(toggle, true) ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
//   width: 100%;
//   height: 100%;
//   position: relative;
// `

const BackgroundCarousel = ({ item }) => {
  const [toggle, setToggle] = useState(false) 

  const activateBlurEffect = () => {
    console.log(toggle)
    if (isEqual(toggle, true)) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }
{/* <BottomSliderContainer>
          <TitleSliderText>Test</TitleSliderText>
      </BottomSliderContainer> */}
  return (
    <>
      <BackgroundImage src={get(item, 'image')} onClick={() => activateBlurEffect()} />
    </>
  )
}

BackgroundCarousel.propTypes = {
  item: PropTypes.any
}

export default BackgroundCarousel