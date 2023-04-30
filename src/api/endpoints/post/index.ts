import api, { IPost } from '@/api'

export const getPosts = async () => {
  const { data } = await api.get<IPost[]>('/posts/')
  return data
}
