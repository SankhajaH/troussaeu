import useSWR from 'swr'
import {getClothes} from '../../lib/queries/clothes'

const useGetClothes = (id: any) => {
  const {data, error, mutate} = useSWR(['clothes', id], () => getClothes(id))

  return {
    clothes: data,
    error,
    loading: !data && !error,
    mutate,
  }
}

export default useGetClothes
