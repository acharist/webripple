import { FunctionComponent } from 'react'
import { Tag } from './components'

import { ITagsProps } from './Tags.d'

import styles from './Tags.module.scss'

export const Tags: FunctionComponent<ITagsProps> = ({
  tags,
}): JSX.Element => {
  return (
    <div className={styles.root}>
      {tags.map((tag) => (
        <Tag key={tag.id} {...tag} />
      ))}
    </div>
  )
}
