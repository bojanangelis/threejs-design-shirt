'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Environment } from '@react-three/drei'
import Shirt from './_components/Shirt'
import Backdrop from './_components/Backdrop'
import CameraRig from './_components/CameraRig'

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
