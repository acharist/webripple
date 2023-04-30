import type { GetStaticProps, NextPage } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { getTags, getPosts } from '@/api'
import { HomeModule } from '@/modules'

const Home: NextPage = () => {
  return <HomeModule />
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('tags', async () => await getTags())
  await queryClient.prefetchQuery(
    'posts',
    async () => await getPosts()
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
