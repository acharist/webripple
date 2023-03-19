import api, { ITag } from '@/api'

export const getTags = async () => {
  const { data } = await api.get<ITag[]>('/tags/')
  return data
}
