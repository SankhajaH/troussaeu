import React from 'react'
import ClothesCard from '../components/common/Clothes-Card'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

type Props = {}

const Clothes = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <p className='font-light text-grey-light text-lg mb-2'>T-Shirts</p>
        <div>
          <ClothesCard />
        </div>
      </div>
      <footer className='fixed bottom-0 left-0 right-0'>
        <Footer />
      </footer>
    </div>
  )
}

export default Clothes
