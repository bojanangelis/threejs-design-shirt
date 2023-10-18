import state from '@/store'
import React from 'react'
import { useSnapshot } from 'valtio'
import { SketchPicker } from 'react-color'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChangeComplete={color => (state.color = color.hex)}
        className="z-50"
      />
    </div>
  )
}

export default ColorPicker
