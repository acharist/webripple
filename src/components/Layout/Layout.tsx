import { FunctionComponent, PropsWithChildren } from 'react'
import { Header, MobileNav } from '@/components'

import styles from './Layout.module.scss'

export const Layout: FunctionComponent<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <div className={styles.root}>
      <MobileNav />
      <Header />
      <main>{children}</main>
    </div>
  )
}
