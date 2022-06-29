import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { isEqual, get, map } from 'lodash'
import SVG from 'react-inlinesvg'

const BackgroundImage = styled.div`
  background: url(${({ src }) => src}) no-repeat center center ${({ toggle }) => isEqual(toggle, true) ? 'rgba(81, 111, 112, 1)' : ''};
  object-fit: cover;
  height: 100%;
  width: 100%;
  background-blend-mode: multiply;
  background-size: cover;
`

BackgroundImage.propTypes = {
  src: PropTypes.any,
  toggle: PropTypes.bool
}

const BottomSliderContainer = styled.div`
  z-index: 1;
  flex-direction: column;
  position: relative;
`

const TitleSliderText = styled.p`
  color: white;
  position: absolute;
  bottom: 20%;
  right: 5%;
  font-weight: bold;
  font-size: xx-large;
`

const IconSVGStyled = styled(SVG)`
  transform: translate(50%, 0);
  left: 40%;
  top: -48vh;
  position: absolute;
  
  & path {
    fill: ${({ color }) => color};
  }
`

IconSVGStyled.propTypes = {
  color: PropTypes.string
}

const ContentSliderText = styled.p`
  color: white;
  padding: 20px;
  font-weight: bold;
  font-size: larger;
`

const ContentSliderDiv = styled.div`
  position: absolute;
  top: -35vh;
  padding: 20px;
`

const ContentToggle = ({ toggle, title, content, icon }) => {
  if (isEqual(toggle, false)) {
    return null
  }

  return (
    <BottomSliderContainer>
      <IconSVGStyled color={'white'} src={icon} />
      <ContentSliderDiv>
        {map(content, (item, key) => {
          return <><ContentSliderText>
            {item}
          </ContentSliderText>
          </>
        })}
      </ContentSliderDiv>
      <TitleSliderText>
        {title}
      </TitleSliderText>
    </BottomSliderContainer>
  )
}

ContentToggle.propTypes = {
  toggle: PropTypes.bool.isRequired,
  title: PropTypes.string,
  content: PropTypes.array,
  icon: PropTypes.any,
}

const BackgroundCarousel = ({ item }) => {
  const [toggle, setToggle] = useState(false) 

  const activateBlurEffect = () => {
    if (isEqual(toggle, true)) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <>
      <BackgroundImage src={get(item, 'image')} toggle={toggle} onClick={() => activateBlurEffect()} />
      <ContentToggle toggle={toggle} content={get(item, 'content')} title={get(item, 'title')} icon={get(item, 'icon')} />
    </>
  )
}

BackgroundCarousel.propTypes = {
  item: PropTypes.any
}

export default BackgroundCarousel