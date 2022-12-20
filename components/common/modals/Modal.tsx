import React from 'react'
import Button from '../Button'
import DropZone from '../DropZone'
import Form from '../Form'
import Input from '../Form/Input'
import {GiCancel} from 'react-icons/gi'

type Props = {
  onClose: any
}

const Modal = ({onClose}: Props) => {
  const onSubmit = () => {
    console.log('This is onsubmit')
  }
  return (
    <div className='fixed top-0 left-0 right-0 h-full flex justify-center items-center z-30'>
      <div className='bg-grey-light w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3  p-2 rounded-md relative '>
        <div className='flex justify-end text-red-700 text-lg'>
          <GiCancel onClick={() => onClose(false)} />
        </div>
        <Form onSubmit={onSubmit} className='p-2'>
          <Input
            wrapperStyles='mb-4'
            label='Name'
            name='name'
            required
            variant='dark'
            registerOptions={{required: '*Required'}}
          />
          <DropZone label='Image' name='image' />
          <div className='flex justify-between pt-6'>
            <Button variant='primary' type='submit'>
              Add
            </Button>
            <Button variant='primary' onClick={() => onClose(false)}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Modal
