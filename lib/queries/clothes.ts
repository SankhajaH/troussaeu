import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../firebase'

export const getClothes = async (id: string) => {
  const ref = collection(db, 'clothes')
  const q = query(ref, where('cloth_type_id', '==', id))
  let data: any[] = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()})
  })
  return data
}
