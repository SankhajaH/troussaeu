/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

type Props = {
  location: string
  imageUrl: string
}

const LocationCard = ({location, imageUrl}: Props) => {
  const myLoader = ({src, width, quality}: any) => {
    return `https://cdn.pixabay.com/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className='w-80'>
      {/* @ts-ignore */}
      <img
        className='h-320 w-320 md:h-28 md:w-28 object-cover rounded-t-md'
        src={imageUrl}
        alt='location image'
      />
      <div className='bg-indigo-main rounded-b-md'>
        <p className='flex justify-center py-1 font-semibold text-grey-light'>
          {location}
        </p>
      </div>
    </div>
  )
}

export default LocationCard
