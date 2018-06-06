import React from 'react'
import LottieWrapper from './LottieWrapper';

const AnimationWrapper = ({open, source}) => (
  open && <LottieWrapper source={source} />
)

export default AnimationWrapper
