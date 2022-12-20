import React from 'react'
import Button from '../components/common/Button'

type Props = {}

const GetStarted = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col mx-auto py-36'>
        <div className='font-semibold text-4xl text-indigo-dark flex justify-center'>
          trousseau
        </div>
        <div className='flex  flex-col text-sm text-white font-light'>
          <p className='flex justify-center'>A wardrobe management </p>
          <p className='flex justify-center'>system.</p>
        </div>
      </div>
      <div className='px-8 pt-36 flex justify-center'>
        <Button variant='primary' fullWidth>
          Get started
        </Button>
      </div>
    </div>
  )
}

export default GetStarted
