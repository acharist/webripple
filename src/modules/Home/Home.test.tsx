import '@testing-library/jest-dom'
import { renderHook, waitFor } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'

export function useTags() {
  return useQuery({
    queryKey: ['tags'],
    queryFn: () => [
      {
        id: '1',
        title: 'Test',
        slug: 'test',
        created_at: '2023-03-18T13:02:23.473Z',
        updated_at: '2023-03-18T13:02:23.473Z',
      },
    ],
  })
}

const queryClient = new QueryClient()
const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)

it('getting tags', async () => {
  const { result } = renderHook(() => useTags(), { wrapper })

  await waitFor(() => expect(result.current.isSuccess).toBe(true))
})
