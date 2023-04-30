import { FunctionComponent } from 'react'
import { Cards, Tags } from '@/components'

import { useTags } from '@/hooks'

import styles from './Home.module.scss'

export const HomeModule: FunctionComponent = (): JSX.Element => {
  const tags = useTags()

  const tagsJsx = (
    <div className={styles.tags}>
      {tags.isSuccess && <Tags tags={tags.data} />}
    </div>
  )

  return (
    <>
      {tagsJsx}
      <Cards />
    </>
  )
}
