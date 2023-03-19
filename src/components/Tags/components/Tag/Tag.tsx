import Link from 'next/link'
import { FunctionComponent } from 'react'

import { ITagProps } from './Tag.d'

import styles from './Tag.module.scss'

export const Tag: FunctionComponent<ITagProps> = ({
  title,
  slug,
}): JSX.Element => {
  const path = `/tag/${slug}`

  return (
    <Link href={path}>
      <a className={styles.root}>
        <span className={styles.text}>{title}</span>
      </a>
    </Link>
  )
}
