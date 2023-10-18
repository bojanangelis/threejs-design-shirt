import state from '@/store'
import React from 'react'
import { useSnapshot } from 'valtio'

interface CustomButtonProps {
  type: string
  title: string
  handleClick: () => void
  className: string
}

const CustomButton = ({
  type,
  title,
  handleClick,
  className,
}: CustomButtonProps) => {
  const snap = useSnapshot(state)
  const generateStyle = (type: string) => {
    switch (type) {
      case 'filled':
        return {
          backgroundColor: snap.color,
          color: '#fff',
        }
    }
  }
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${className}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
