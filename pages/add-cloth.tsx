import React from 'react'
import ClothTypeCard from '../components/common/Cloth-Type'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

type Props = {}

const AddClothType = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <p className='font-light text-grey-light text-lg mb-2'>Cloth types</p>
        <div>
          <ClothTypeCard />
        </div>
      </div>
      <footer className='fixed bottom-0 left-0 right-0'>
        <Footer />
      </footer>
    </div>
  )
}

export default AddClothType
