import Image from 'next/image'
import React from 'react'

type Props = {}

const LocationCard = (props: Props) => {
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
        <p className='flex justify-center py-1 font-semibold text-grey-light'>
          Boarding
        </p>
      </div>
    </div>
  )
}

export default LocationCard
