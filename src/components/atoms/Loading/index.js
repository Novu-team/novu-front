import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

import loading from './loading.json'

const Loading = props => (
  <Player
    autoplay
    loop
    src={loading}
    {...props} />
)

export default Loading