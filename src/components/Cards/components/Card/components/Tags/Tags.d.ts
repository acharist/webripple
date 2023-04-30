import { ITag } from '@/api'

export interface ITagsProps {
  tags: Omit<ITag, 'created_at' | 'updated_at'>[]
}
