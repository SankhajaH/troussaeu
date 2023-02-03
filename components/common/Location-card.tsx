/* eslint-disable @next/next/no-img-element */
import {deleteDoc, doc} from 'firebase/firestore'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {db} from '../../lib/firebase'

type Props = {
  location: string
  imageUrl: string
  id: any
}

const LocationCard = ({location, imageUrl, id}: Props) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const handleDelete = async () => {
    setLoading(true)
    await deleteDoc(doc(db, 'locations', id))
    setLoading(false)
    // router.reload()
  }
  return (
    <div className='w-80 py-2'>
      {/* @ts-ignore */}
      <img
        className='h-320 w-320 md:h-28 md:w-28 object-cover rounded-t-md'
        src={imageUrl}
        alt='location image'
      />
      <div className='bg-indigo-main rounded-b-md'>
        <div className='flex flex-row justify-between px-2'>
          <div className='flex justify-center py-1 font-semibold text-grey-light'>
            {location}
          </div>
          <div className='py-2 text-lg flex justify-center text-red-main'>
            {loading ? (
              <button type='button' disabled>
                <RiDeleteBin2Line />
              </button>
            ) : (
              <button onClick={() => handleDelete()}>
                <RiDeleteBin2Line />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
