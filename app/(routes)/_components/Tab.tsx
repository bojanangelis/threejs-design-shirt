import state from '@/store'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { useSnapshot } from 'valtio'

interface Props {
  tab: { name: string; icon: StaticImageData }
  isFilterTab?: boolean
  isActiveTab?: boolean
  handleClick?: () => void
}

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }: Props) => {
  const snap = useSnapshot(state)
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : {
          backgroundColor: 'transparent',
          opacity: 1,
        }
  return (
    <div
      onClick={handleClick}
      key={tab.name}
      style={activeStyles}
      className={`tab-btn ${
        isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'
      }`}
    >
      <Image
        className={`${
          isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'
        }`}
        src={tab.icon}
        alt={tab.name}
        width={38}
        height={38}
      />
    </div>
  )
}

export default Tab
