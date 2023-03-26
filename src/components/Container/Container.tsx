import { FunctionComponent, PropsWithChildren } from 'react'

import styles from './Container.module.scss'

export const Container: FunctionComponent<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return <div className={styles.root}>{children}</div>
}
