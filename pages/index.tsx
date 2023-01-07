import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import LocationCard from '../components/common/Location-card'
import withProtected from '../hooks/withProtected'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <p className='font-light text-grey-light text-lg mb-2'>Locations</p>
        <div>
          <LocationCard />
        </div>
      </div>
      <footer className='fixed bottom-0 left-0 right-0'>
        <Footer />
      </footer>
    </div>
  )
}

export default withProtected(Dashboard)
