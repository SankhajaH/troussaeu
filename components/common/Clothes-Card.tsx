/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import {RiDeleteBin2Line} from 'react-icons/ri'

type Props = {
  imageUrl: string
}

const ClothesCard = ({imageUrl}: Props) => {
  return (
    <div className='w-80'>
      {/* @ts-ignore */}
      <img
        className='h-320 w-320 md:h-28 md:w-28 object-cover rounded-t-md'
        src={imageUrl}
        alt='cloth type image'
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
