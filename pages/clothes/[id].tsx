import {useRouter} from 'next/router'
import React, {useState} from 'react'
import AddButton from '../../components/common/AddButton'
import ClothesCard from '../../components/common/Clothes-Card'
import Header from '../../components/common/Header'
import Loader from '../../components/common/Loader'
import ClothesModal from '../../components/common/modals/Clothes-Modal'
import useGetClothes from '../../hooks/clothes/useGetClothes'

type Props = {}

const Clothes = (props: Props) => {
  const [openModal, setOpenModal] = useState<Boolean>(false)
  const router = useRouter()
  const {id} = router.query
  const {clothes, error, loading} = useGetClothes(id)

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    )
  }
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div>
        <p className='font-light text-grey-light text-lg mb-2'>T-Shirts</p>
        {clothes?.length === 0 ? (
          <div className='grid h-screen place-items-center'>
            <div className='text-grey-light flex flex-col justify-center opacity-40'>
              <p className='flex justify-center'>
                Looks like you have not added any
              </p>
              <p className='flex justify-center'> clothes.</p>
              <p className='flex justify-center'>Let&apos;s add one.</p>
            </div>
          </div>
        ) : (
          <div>
            {clothes &&
              clothes?.length > 0 &&
              clothes.map((cloth, i) => (
                <div
                  key={i}
                  onClick={() => router.replace(`/clothes/${cloth?.id}`)}
                >
                  <ClothesCard imageUrl={cloth?.image_url} />
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
        <ClothesModal onClose={setOpenModal} cloth_type_id={id} />
      )}
    </div>
  )
}

export default Clothes
