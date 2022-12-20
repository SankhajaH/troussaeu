import Image from 'next/image'
import React from 'react'
import {RiDeleteBin2Line} from 'react-icons/ri'

type Props = {}

const ClothesCard = (props: Props) => {
  const myLoader = ({src, width, quality}: any) => {
    return `https://cdn.pixabay.com/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className='w-80'>
      <Image
        loader={myLoader}
        src='photo/2022/11/30/13/16/tel-aviv-7626789__340.jpg'
        alt='Location image'
        width={320}
        height={320}
        className='rounded-t-md'
      />
      <div className='bg-indigo-main rounded-b-md'>
        <div className='py-2 text-lg flex justify-center text-red-main'>
          <RiDeleteBin2Line />
        </div>
      </div>
    </div>
  )
}

export default ClothesCard
