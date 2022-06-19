import React from 'react'
import styled, { keyframes } from 'styled-components'
import { get } from 'lodash'

const WrapperStyled = styled.div`

`

const InfiniteAnimation = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`

const InfiniteAnimation2 = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-200%); }
`

const MarqueeStyled = styled.div`
  overflow: hidden;
  animation: ${InfiniteAnimation} 10s linear infinite;
`

const Marquee2Styled = styled.div`
  display: inline-block;
  animation: ${InfiniteAnimation2} 10s linear infinite;
  animation-delay: 5s;
`

const TextInfiniteStyled = styled.div`
  display: inline-block;
  margin: 0 20px;
`

const InfiniteTextIntro = () => {
  return (
    <>
      <WrapperStyled>
        <MarqueeStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
        </MarqueeStyled>
        <Marquee2Styled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
          <TextInfiniteStyled>
            TELECHARGE L’APPLI
          </TextInfiniteStyled>
        </Marquee2Styled>
      </WrapperStyled>
    </>
  )
}

export default InfiniteTextIntro