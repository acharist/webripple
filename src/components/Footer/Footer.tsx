import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Logo, Nav, Container } from '@/components'
import { Icon } from '@/UI'

import styles from './Footer.module.scss'

export const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.top}>
          <Logo variant="light" />
          <div className={styles.nav}>
            <Nav variant="light" />
          </div>
          <Icon id="vk" width={24} height={24} />
        </div>
        <div className={styles.bottom}>
          <ul className={styles.documents}>
            <li>
              <Link href="#">
                <a data-testid="confidentiality">
                  Конфиденциальность
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a data-testid="intelligence">Сведения</a>
              </Link>
            </li>
          </ul>
          <div className={styles.copyright} data-testid="copyright">
            Webripple © 2023
          </div>
        </div>
      </Container>
    </div>
  )
}
