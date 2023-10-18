import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React, { useRef } from 'react'

const Backdrop = () => {
  const shadows = useRef(null)
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={30}
      alphaTest={0.11}
      scale={1}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[4, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 3, -20]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop
