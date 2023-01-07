import {useRouter} from 'next/router'
import {ElementType} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../lib/firebase'

const withProtected = (Component: ElementType) => {
  const WithProtected = (props: any) => {
    const [user, loading, error] = useAuthState(auth)
    const router = useRouter()
    const continueUrl = router.asPath || '/'

    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      )
    }
    if (!loading && !user) {
      router.replace(`/get-started?continueUrl=${continueUrl}`)
    }
    if (!loading && user) {
      return <Component {...props} />
    }
    return <p>Loading...</p>
  }
  return WithProtected
}

export default withProtected
