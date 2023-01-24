/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

type Props = {
  cloth_type: string
  imageUrl: string
}

const ClothTypeCard = ({cloth_type, imageUrl}: Props) => {
  return (
    <div className='w-80 py-4'>
      {/* @ts-ignore */}
      <img
        className='h-320 w-320 md:h-28 md:w-28 object-cover rounded-t-md'
        src={imageUrl}
        alt='cloth type image'
      />
      <div className='bg-indigo-main rounded-b-md'>
        <p className='flex justify-center py-1 font-semibold text-grey-light'>
          {cloth_type}
        </p>
      </div>
    </div>
  )
}

export default ClothTypeCard
