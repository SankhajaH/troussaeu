/* eslint-disable @next/next/no-img-element */
import {deleteDoc, doc} from 'firebase/firestore'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React from 'react'
import {RiDeleteBin2Line} from 'react-icons/ri'
import useGetClothes from '../../hooks/clothes/useGetClothes'
import {db} from '../../lib/firebase'

type Props = {
  imageUrl: string
  id: any
}

const ClothesCard = ({imageUrl, id}: Props) => {
  const router = useRouter()
  const handleDelete = async () => {
    await deleteDoc(doc(db, 'clothes', id))
    router.reload()
  }
  // console.log('id', id)

  return (
    <div className='w-80 py-4'>
      {/* @ts-ignore */}
      <img
        className='h-320 w-320 md:h-28 md:w-28 object-cover rounded-t-md'
        src={imageUrl}
        alt='cloth type image'
      />
      <div className='bg-indigo-main rounded-b-md'>
        <div className='py-2 text-lg flex justify-center text-red-main'>
          <button onClick={() => handleDelete()}>
            <RiDeleteBin2Line />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClothesCard
