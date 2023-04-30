import Link from 'next/link'
import { FunctionComponent } from 'react'
import { ITag } from '@/api'

import styles from './Tag.module.scss'

export const Tag: FunctionComponent<
  Omit<ITag, 'created_at' | 'updated_at'>
> = ({ slug, title }): JSX.Element => {
  return (
    <li className={styles.root}>
      <Link href={`/${slug}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}
