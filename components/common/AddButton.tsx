import React from 'react'
import {IoMdAdd} from 'react-icons/io'

type Props = {}

const AddButton = (props: Props) => {
  return (
    <div className='bg-indigo-main rounded-full w-fit'>
      <div className='p-2'>
        <div className='bg-grey-main rounded-full text-xl'>
          <div className='p-2'>
            <IoMdAdd />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddButton
