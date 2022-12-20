import React from 'react'
import {RegisterOptions, useWatch} from 'react-hook-form'

type Props = {
  label: string
  name: string
  control?: any
  required?: boolean
  register?: any
  registerOptions?: RegisterOptions
}

function DropZone({
  label,
  name,
  register,
  control,
  registerOptions,
  required = false,
}: Props) {
  const file = useWatch({
    control,
    name: 'file',
  })

  return (
    <div>
      <div className='relative text-md md:text-base text-black-dark mb-1'>
        {label}{' '}
        <span className={`absolute top-0 text-red-500`}>{required && '*'}</span>
      </div>

      <label
        htmlFor='dropzone-file'
        className='flex flex-col justify-center items-center w-full h-48 rounded-lg cursor-pointer bg-offWhite'
      >
        <div>
          {file && file[0] ? (
            <img
              className='h-44 object-contain'
              src={URL.createObjectURL(file[0])}
            />
          ) : (
            <div className='flex flex-col justify-center items-center pt-5 pb-6'>
              <svg
                aria-hidden='true'
                className='mb-3 w-10 h-10 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                ></path>
              </svg>
              <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <span className='font-semibold'>Click to upload</span> or drag
                and drop
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                PNG, JPG or GIF
              </p>
            </div>
          )}

          <input
            id='dropzone-file'
            type='file'
            className='hidden'
            {...register(name, registerOptions)}
          />
        </div>
      </label>
    </div>
  )
}

export default DropZone
