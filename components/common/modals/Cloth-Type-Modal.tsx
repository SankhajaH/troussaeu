import React, {useState} from 'react'
import Button from '../Button'
import DropZone from '../DropZone'
import Form from '../Form'
import Input from '../Form/Input'
import {GiCancel} from 'react-icons/gi'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, db, storage} from '../../../lib/firebase'
import {collection, doc, setDoc} from 'firebase/firestore'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import useGetLocations from '../../../hooks/locations/useGetLocations'
import {mutate} from 'swr'

type Props = {
  onClose: any
  location_id: any
}

const ClothTypesModal = ({onClose, location_id}: Props) => {
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: any) => {
    setLoading(true)
    const collectionRef = collection(db, 'cloth-types')
    const docRef = doc(collectionRef)
    const storageRef = ref(storage, `cloth-types/${docRef.id}`)

    uploadBytes(storageRef, data.file[0]).then(async (snapshot) => {
      const imageUrl = await getDownloadURL(snapshot.ref)
      await setDoc(docRef, {
        type: data.type,
        location_id: location_id,
        image_url: imageUrl,
      }).catch((error) => {
        throw error
      })
      setLoading(false)
      onClose(false)
    })
  }
  return (
    <div className='fixed top-0 left-0 right-0 h-full flex justify-center items-center z-30'>
      <div className='bg-grey-light w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3  p-2 rounded-md relative '>
        {loading ? (
          <button
            type='button'
            className='flex justify-end text-red-700 text-lg'
            disabled
          >
            <GiCancel onClick={() => onClose(false)} />
          </button>
        ) : (
          <button
            className='flex justify-end text-red-700 text-lg'
            onClick={() => onClose(false)}
          >
            <GiCancel />
          </button>
        )}

        <div className='text-lg text-black-main flex justify-center font-semibold'>
          Add Cloth Type
        </div>
        <Form onSubmit={onSubmit} className='p-2'>
          <Input
            wrapperStyles='mb-4'
            label='Type'
            name='type'
            required
            variant='dark'
            registerOptions={{required: '*Required'}}
          />
          <DropZone
            label='Image'
            name='file'
            required
            registerOptions={{required: '*Required'}}
          />
          <div className='flex justify-between pt-6'>
            <Button variant='primary' type='submit' loading={loading}>
              Add
            </Button>
            <Button
              variant='primary'
              onClick={() => onClose(false)}
              loading={loading}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default ClothTypesModal
