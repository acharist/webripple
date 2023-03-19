import { useQuery } from 'react-query'
import { getTags } from '@/api'

export const useTags = () => {
  return useQuery('tags', getTags)
}
