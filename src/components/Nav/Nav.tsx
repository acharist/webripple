import clsx from 'clsx'
import { FunctionComponent } from 'react'
import { Item } from './components'

import { INavProps } from './Nav.d'

import styles from './Nav.module.scss'

export const Nav: FunctionComponent<INavProps> = ({
  variant = 'dark',
  direction = 'row',
}): JSX.Element => {
  return (
    <nav className={clsx(styles.root, styles[variant])}>
      <ul className={clsx(styles.list, styles[direction])}>
        <li className={styles.item}>
          <Item name={'Главная'} href={'/'} />
        </li>
        <li className={styles.item}>
          <Item name={'Контакты'} href={'/kontakty'} />
        </li>
      </ul>
    </nav>
  )
}
