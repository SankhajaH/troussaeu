import {IdTokenResult, User} from 'firebase/auth'
import {Timestamp} from 'firebase/firestore'

export type AuthStoreType = {
  user: User | null
  claims: IdTokenResult['claims'] | null

  setUser: (user: User | null) => void
  setClaims: (claims: IdTokenResult['claims'] | null) => void
  setLoading: (loading: boolean) => void
  loading: boolean
  //   signIn: ({}: SignInProps) => Promise<User>
  //   signUp: ({}: SignInProps) => Promise<User>
  signOut: () => Promise<void>
}
