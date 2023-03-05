import { FunctionComponent } from 'react'
import { Logo, Nav } from '@/components'

import { useApp } from '@/contexts'
import { Icon } from '@/UI'
import { IHeaderProps } from './Header.d'

import styles from './Header.module.scss'

export const Header: FunctionComponent<
  IHeaderProps
> = (): JSX.Element => {
  const { setModalIsOpened } = useApp()

  const handleOpenModal = () => {
    setModalIsOpened(true)
  }

  return (
    <header className={styles.root}>
      <Logo />
      <div className={styles.nav}>
        <Nav />
      </div>
      <a
        className={styles.link}
        href="https://vk.com/webripple"
        target="_blank"
        rel="noreferrer"
      >
        <Icon id="vk" width={24} height={24} />
      </a>
      <button className={styles.button} onClick={handleOpenModal}>
        <Icon id="burger" width={20} height={12} />
      </button>
    </header>
  )
}
