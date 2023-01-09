import React, {useState} from 'react'
import AddButton from '../components/common/AddButton'
import ClothesCard from '../components/common/Clothes-Card'
import Header from '../components/common/Header'

type Props = {}

const Clothes = (props: Props) => {
  const [openModal, setOpenModal] = useState<Boolean>(false)
  return (
    <div>
      <Header />
      <div>
        <p className='font-light text-grey-light text-lg mb-2'>T-Shirts</p>
        <div>
          <ClothesCard />
        </div>
      </div>
      <div className='fixed bottom-0 left-0 right-0'>
        <div className='bg-indigo-main'>
          <div className='flex justify-center relative bottom-4'>
            <AddButton onClick={() => setOpenModal(true)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clothes
