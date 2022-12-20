import React from 'react'
import AddButton from './AddButton'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-indigo-main'>
      <div className='flex justify-center relative bottom-4'>
        <AddButton />
      </div>
    </div>
  )
}

export default Footer
