import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

import { IItemProps } from './Item.d'

import styles from './Item.module.scss'

export const Item: FunctionComponent<IItemProps> = ({
  name,
  href,
}): JSX.Element => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a
        className={clsx({
          [styles.active]: pathname === href,
        })}
      >
        {name}
      </a>
    </Link>
  )
}
