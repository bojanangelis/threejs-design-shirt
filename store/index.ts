import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/next.svg',
  fullDecal: '/next.svg',
})

export default state
