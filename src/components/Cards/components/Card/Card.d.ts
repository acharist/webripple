import { ITag } from '@/api'

export interface ICardProps {
  image: string
  title: string
  slug: string
  content: string
  tags: Omit<ITag, 'created_at' | 'updated_at'>[]
}
