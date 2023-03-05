import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Modal from 'react-modal'
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  DehydratedState,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Layout } from '@/components'
import { AppProvider } from '@/contexts'

Modal.setAppElement('#mobile-nav')

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
