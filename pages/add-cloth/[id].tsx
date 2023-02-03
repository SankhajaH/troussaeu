import {useRouter} from 'next/router'
import React, {useState} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import AddButton from '../../components/common/AddButton'
import ClothTypeCard from '../../components/common/Cloth-Type'
import Header from '../../components/common/Header'
import Loader from '../../components/common/Loader'
import ClothTypesModal from '../../components/common/modals/Cloth-Type-Modal'
import useGetClothTypes from '../../hooks/cloth-types/useGetClothTypes'

type Props = {}

const AddClothType = (props: Props) => {
  const [openModal, setOpenModal] = useState<Boolean>(false)
  const router = useRouter()
  const {id} = router.query
  const {cloth_types, loading, error} = useGetClothTypes(id)

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    )
  }
  if (loading) {
    return (
      <div className='grid h-screen place-items-center'>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div>
        <p className='font-light text-grey-light text-lg mb-2'>Cloth types</p>
        <div className='text-grey-light'>
          <button onClick={() => router.back()}>
            <BiArrowBack />
          </button>
        </div>
        {cloth_types?.length === 0 ? (
          <div className='grid h-screen place-items-center'>
            <div className='text-grey-light flex flex-col justify-center opacity-40'>
              <p className='flex justify-center'>
                Looks like you have not added any
              </p>
              <p className='flex justify-center'> cloth types.</p>
              <p className='flex justify-center'>Let&apos;s add one.</p>
            </div>
          </div>
        ) : (
          <div>
            {cloth_types &&
              cloth_types?.length > 0 &&
              cloth_types.map((cloth, i) => (
                <div
                  key={i}
                  onClick={() => router.push(`/clothes/${cloth?.id}`)}
                >
                  <ClothTypeCard
                    id={cloth?.id}
                    cloth_type={cloth?.type}
                    imageUrl={cloth?.image_url}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
      <div className='fixed bottom-0 left-0 right-0'>
        <div className='bg-indigo-main'>
          <div className='flex justify-center relative bottom-4'>
            <button onClick={() => setOpenModal(true)}>
              <AddButton />
            </button>
          </div>
        </div>
      </div>
      {openModal && id && (
        <ClothTypesModal onClose={setOpenModal} location_id={id} />
      )}
    </div>
  )
}

export default AddClothType
