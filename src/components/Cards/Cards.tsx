import { FunctionComponent } from 'react'

import { ICardsProps } from './Cards.d'

import styles from './Cards.module.scss'
import { Card } from './components'

export const Cards: FunctionComponent<ICardsProps> = ({
  posts,
}): JSX.Element => {
  return (
    <div className={styles.root}>
      {posts.map((post) => (
        <Card data-testid="card" key={post.id} {...post} />
      ))}
    </div>
  )
}
