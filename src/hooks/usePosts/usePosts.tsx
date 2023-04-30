import { useQuery } from 'react-query'
import { getPosts } from '@/api'

export const usePosts = () => {
  return useQuery('post', getPosts)
}
