import getConfig from 'next/config'
import Image from 'next/future/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import { ICardProps } from './Card.d'

import styles from './Card.module.scss'
import { Tags } from './components'
const { publicRuntimeConfig } = getConfig()

const { apiDomain } = publicRuntimeConfig

export const Card: FunctionComponent<ICardProps> = ({
  image,
  title,
  slug,
  content,
  tags,
}): JSX.Element => {
  return (
    <div className={styles.root}>
      <Image
        src={`${apiDomain}${image}`}
        alt={title}
        className={styles.image}
        fill
      />
      <div className={styles.content}>
        <Tags tags={tags} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{content}</p>
        <Link href={`/${slug}`}>
          <a className={styles.more}>Подробнее</a>
        </Link>
      </div>
    </div>
  )
}
