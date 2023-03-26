import { FunctionComponent } from 'react'

import Modal from 'react-modal'
import { Nav } from '@/components'
import { useApp } from '@/contexts'
import { Icon } from '@/UI'

import styles from './MobileNav.module.scss'

const customStyles = {
  content: {
    width: '100vw',
    height: '100vh',
    border: 'none',
    padding: 0,
    inset: 0,
  },
}

export const MobileNav: FunctionComponent = (): JSX.Element => {
  const { modalIsOpened, setModalIsOpened } = useApp()

  const handleCloseModal = () => {
    setModalIsOpened(false)
  }

  return (
    <Modal
      isOpen={modalIsOpened}
      style={customStyles}
      onRequestClose={handleCloseModal}
      contentLabel="Мобильное меню"
    >
      <div className={styles.root}>
        <Icon
          id="cross"
          width={20}
          height={20}
          className={styles.cross}
          onClick={handleCloseModal}
        />
        <Nav direction="column" />
        <Icon id="vk" width={24} height={24} className={styles.vk} />
      </div>
    </Modal>
  )
}
