import type { GetStaticProps, NextPage } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { getTags } from '@/api'
import { HomeModule } from '@/modules'

const Home: NextPage = () => {
  return <HomeModule />
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('tags', async () => await getTags())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
