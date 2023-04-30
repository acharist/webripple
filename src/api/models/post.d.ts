import { IEntity, ITag } from './common'

export interface IPostMeta {
  id: string
  key: string
  content: string
}

export interface IPost extends IEntity {
  image: string
  title: string
  slug: string
  content: string
  published: boolean | null
  meta: IPostMeta[]
  tags: ITag[]
}
