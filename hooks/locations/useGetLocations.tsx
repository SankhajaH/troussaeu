import useSWR from 'swr'
import {getLocations} from '../../lib/queries/locations'

const useGetLocations = (id: any) => {
  const {data, error, mutate} = useSWR(['locations', id], () =>
    getLocations(id)
  )

  return {
    locations: data,
    error,
    loading: !data && !error,
    mutate,
  }
}

export default useGetLocations
