import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import AddButton from '../components/common/AddButton'
import Button from '../components/common/Button'
import Header from '../components/common/Header'
import Loader from '../components/common/Loader'
import LocationCard from '../components/common/Location-card'
import LocationsModal from '../components/common/modals/Locations-Modal'
import useGetLocations from '../hooks/locations/useGetLocations'
import withProtected from '../hooks/withProtected'
import {auth} from '../lib/firebase'

type Props = {}

const Dashboard = (props: Props) => {
  const [user] = useAuthState(auth)
  // console.log('this is the user', user)
  const {locations, loading, error} = useGetLocations(user?.uid)
  const [openModal, setOpenModal] = useState<Boolean>(false)
  const router = useRouter()

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
        <div className='font-light text-grey-light text-lg mb-2'>Locations</div>
        {locations?.length === 0 ? (
          <div className='grid h-screen place-items-center'>
            <div className='text-grey-light flex flex-col justify-center opacity-40'>
              <div className='flex justify-center'>
                Looks like you have not added any
              </div>
              <div className='flex justify-center'> locations.</div>
              <div className='flex justify-center'>Let&apos;s add one.</div>
            </div>
          </div>
        ) : (
          <div>
            {locations &&
              locations?.length > 0 &&
              locations.map((location, i) => (
                <div
                  key={i}
                  onClick={() => router.push(`/add-cloth/${location?.id}`)}
                >
                  <LocationCard
                    id={location?.id}
                    location={location?.location_name}
                    imageUrl={location?.image_url}
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
      {openModal && <LocationsModal onClose={setOpenModal} />}
    </div>
  )
}

export default withProtected(Dashboard)
