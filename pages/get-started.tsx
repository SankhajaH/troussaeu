import React from 'react'
import Button from '../components/common/Button'
import {auth} from '../lib/firebase'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {useRouter} from 'next/router'
import Loader from '../components/common/Loader'

type Props = {}

const GetStarted = (props: Props) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const router = useRouter()
  const {continueUrl = '/'} = router.query
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
  if (user) {
    router.push(`${continueUrl}`)
  }

  return (
    <div>
      <div className='flex flex-col mx-auto py-36'>
        <div className='font-semibold text-4xl text-indigo-dark flex justify-center'>
          trousseau
        </div>
        <div className='flex  flex-col text-sm text-white font-light'>
          <p className='flex justify-center'>A wardrobe management </p>
          <p className='flex justify-center'>system.</p>
        </div>
      </div>
      <div className='px-8 pt-36 flex justify-center'>
        <Button variant='primary' fullWidth onClick={() => signInWithGoogle()}>
          Get started
        </Button>
      </div>
    </div>
  )
}

export default GetStarted
