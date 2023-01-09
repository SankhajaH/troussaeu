import React, {useState} from 'react'
import AddButton from '../../components/common/AddButton'
import ClothTypeCard from '../../components/common/Cloth-Type'
import Header from '../../components/common/Header'

type Props = {}

const AddClothType = (props: Props) => {
  const [openModal, setOpenModal] = useState<Boolean>(false)
  return (
    <div>
      <Header />
      <div>
        <p className='font-light text-grey-light text-lg mb-2'>Cloth types</p>
        <div>
          <ClothTypeCard />
        </div>
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
    </div>
  )
}

export default AddClothType
