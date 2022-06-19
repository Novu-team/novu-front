import React from 'react'

import HomeIntro from '../../organisms/homeIntro'
import SliderIntro from '../../organisms/SliderIntro'
import ExplanationNovuIntro from '../../organisms/ExplanationNovuIntro'
import GCUIntro from '../../organisms/CGUIntro'
import InfiniteTextIntro from '../../organisms/InfiniteTextIntro'
import ReviewIntro from '../../organisms/ReviewIntro'

const Home = () => (
  <>
    <SliderIntro />
    <ExplanationNovuIntro />
    <HomeIntro />
    <InfiniteTextIntro />
    <ReviewIntro />
    <GCUIntro />
  </>
)

export default Home