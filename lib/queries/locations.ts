import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../firebase'

export const getLocations = async (id: string) => {
  const ref = collection(db, 'locations')
  const q = query(ref, where('uid', '==', id))
  let data: any[] = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()})
  })
  return data
}
