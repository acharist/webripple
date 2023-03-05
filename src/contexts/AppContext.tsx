import {
  createContext,
  useContext,
  useState,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from 'react'

type Context = {
  modalIsOpened: boolean
  setModalIsOpened: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<Context>({
  modalIsOpened: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setModalIsOpened: () => {},
})

export const useApp = () => useContext(AppContext)

interface IAppProvider {
  children: React.ReactNode
}

export const AppProvider: FunctionComponent<IAppProvider> = ({
  children,
}) => {
  const [modalIsOpened, setModalIsOpened] = useState(false)

  return (
    <AppContext.Provider
      value={{
        modalIsOpened,
        setModalIsOpened,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
