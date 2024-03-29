'use client'
import CustomButton from '@/components/CustomButton'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '@/config/motion'
import state from '@/store'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useSnapshot } from 'valtio'

const HomeComponent = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <Image
              className="object-contain"
              src="/next.svg"
              alt="next img"
              width={40}
              height={40}
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&apos;S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash you imagination</strong> and
                define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                className="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default HomeComponent
