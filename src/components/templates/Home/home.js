import React from 'react'
import styled from 'styled-components'

import HomeIntro from '../../organisms/homeIntro'
import SliderIntro from '../../organisms/SliderIntro'
import ExplanationNovuIntro from '../../organisms/ExplanationNovuIntro'
import GCUIntro from '../../organisms/CGUIntro'
import InfiniteTextIntro from '../../organisms/InfiniteTextIntro'
import ReviewIntro from '../../organisms/ReviewIntro'

const HomePage = styled.div`
    position: relative;
    min-height: 100vh;
`

const Home = () => (
  <HomePage>
    <SliderIntro />
    <ExplanationNovuIntro />
    <HomeIntro />
    <InfiniteTextIntro />
    <ReviewIntro />
    <GCUIntro />
  </HomePage>
)

export default Home