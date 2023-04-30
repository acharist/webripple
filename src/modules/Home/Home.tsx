import { FunctionComponent } from 'react'
import { Cards, Tags } from '@/components'

import { useTags, usePosts } from '@/hooks'

import styles from './Home.module.scss'

export const HomeModule: FunctionComponent = (): JSX.Element => {
  const tags = useTags()
  const posts = usePosts()

  const tagsJsx = (
    <div className={styles.tags}>
      {tags.isSuccess && <Tags tags={tags.data} />}
    </div>
  )

  const postsJsx = posts.isSuccess && <Cards posts={posts.data} />

  return (
    <>
      {tagsJsx}
      {postsJsx}
    </>
  )
}
