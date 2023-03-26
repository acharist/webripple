import { FunctionComponent, PropsWithChildren } from 'react'
import { Container, Footer, Header, MobileNav } from '@/components'

import styles from './Layout.module.scss'

export const Layout: FunctionComponent<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Container>
          <MobileNav />
          <Header />
          <main>{children}</main>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
