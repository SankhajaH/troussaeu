import React from 'react'
import {useState} from 'react'
import Button from '../components/common/Button'
import LocationsModal from '../components/common/modals/Locations-Modal'

type Props = {}

const Test = (props: Props) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <Button variant='primary' onClick={() => setOpenModal(true)}>
        Open
      </Button>
      {openModal && <LocationsModal onClose={setOpenModal} />}
    </div>
  )
}

export default Test
