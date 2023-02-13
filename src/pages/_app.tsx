import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  DehydratedState,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
