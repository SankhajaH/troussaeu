import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../firebase'

export const getClothTypes = async (id: string) => {
  const ref = collection(db, 'cloth-types')
  const q = query(ref, where('location_id', '==', id))
  let data: any[] = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()})
  })
  return data
}
