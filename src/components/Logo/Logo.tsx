import clsx from 'clsx'
import { FunctionComponent } from 'react'
import { Icon } from '@/components/Icon'
import { ILogoProps } from './Logo.d'

import styles from './Logo.module.scss'

export const Logo: FunctionComponent<ILogoProps> = ({
  theme = 'dark',
}): JSX.Element => {
  return (
    <div className={clsx(styles.root, styles[theme])}>
      <span className={styles.text}>Webripple</span>
      <Icon id="webripple" className={styles.icon} />
    </div>
  )
}
