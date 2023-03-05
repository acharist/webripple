import clsx from 'clsx'
import { FunctionComponent } from 'react'
import { Icon } from '@/UI'
import { ILogoProps } from './Logo.d'

import styles from './Logo.module.scss'

export const Logo: FunctionComponent<ILogoProps> = ({
  variant = 'dark',
}): JSX.Element => {
  return (
    <div className={clsx(styles.root, styles[variant])}>
      <span className={styles.text}>Webripple</span>
      <Icon id="webripple" className={styles.icon} />
    </div>
  )
}
