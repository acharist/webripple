import { FunctionComponent } from 'react'
import { Tag } from './components'

import { ITagsProps } from './Tags.d'

import styles from './Tags.module.scss'

export const Tags: FunctionComponent<ITagsProps> = ({
  tags,
}): JSX.Element => {
  return (
    <div className={styles.root} data-testid="tags">
      {tags.map(({ id, title, slug }) => (
        <Tag key={id} title={title} slug={slug} />
      ))}
    </div>
  )
}
