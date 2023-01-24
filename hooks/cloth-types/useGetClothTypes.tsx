import useSWR from 'swr'
import {getClothTypes} from '../../lib/queries/cloth-types'

const useGetClothTypes = (id: any) => {
  const {data, error, mutate} = useSWR(['cloth_types', id], () =>
    getClothTypes(id)
  )

  return {
    cloth_types: data,
    error,
    loading: !data && !error,
    mutate,
  }
}

export default useGetClothTypes
