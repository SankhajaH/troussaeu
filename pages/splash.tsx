import React from 'react'
import {RxDotFilled} from 'react-icons/rx'
import {motion} from 'framer-motion'

type Props = {}

const Splash = (props: Props) => {
  const loaderVariants = {
    animationOne: {
      y: [0, -4],
      transition: {
        y: {
          yoyo: Infinity,
          duration: 0.5,
          ease: 'easeOut',
        },
      },
    },
    animationTwo: {
      y: [0, -3],
      transition: {
        y: {
          yoyo: Infinity,
          duration: 0.5,
          ease: 'easeOut',
          delay: 0.2,
        },
      },
    },
    animationThree: {
      y: [0, -2],
      transition: {
        y: {
          yoyo: Infinity,
          duration: 0.5,
          ease: 'easeOut',
          delay: 0.25,
        },
      },
    },
    animationFour: {
      y: [0, -1],
      transition: {
        y: {
          yoyo: Infinity,
          duration: 0.5,
          ease: 'easeOut',
          delay: 0.3,
        },
      },
    },
  }

  return (
    <div className='grid h-screen place-items-center'>
      <div>
        <p className='font-semibold text-4xl text-indigo-dark'>trousseau</p>
        <div className='text-white flex flex-row justify-center text-3xl'>
          <motion.div variants={loaderVariants} animate='animationOne'>
            <RxDotFilled />
          </motion.div>
          <motion.div variants={loaderVariants} animate='animationTwo'>
            <RxDotFilled />
          </motion.div>
          <motion.div variants={loaderVariants} animate='animationThree'>
            <RxDotFilled />
          </motion.div>
          <motion.div variants={loaderVariants} animate='animationFour'>
            <RxDotFilled />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Splash
