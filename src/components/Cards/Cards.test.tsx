import { render } from '@testing-library/react'
import { IPost } from '@/api'
import '@testing-library/jest-dom'
import { Card } from './components'

it('renders cards', async () => {
  const cards: IPost[] = [
    {
      id: '3',
      image: '05d9c162-1418-4520-a601-e74fbb90ccc7.jpeg',
      title: '["1"]',
      slug: 'Post6',
      content: 'Content',
      published: null,
      created_at: '2023-03-30T18:25:58.812Z',
      updated_at: '2023-03-30T18:25:58.812Z',
      meta: [
        {
          id: '8',
          key: 'meta_keyword',
          content: '1',
        },
        {
          id: '9',
          key: 'meta_keyword',
          content: '2',
        },
        {
          id: '10',
          key: 'meta_title',
          content: 'metaTitle',
        },
        {
          id: '11',
          key: 'meta_description',
          content: 'metaDescription',
        },
      ],
      tags: [
        {
          id: '3',
          title: 'React',
          slug: 'react',
          created_at: '2023-03-18T21:31:24.049Z',
          updated_at: '2023-03-18T21:31:24.049Z',
        },
      ],
    },
  ]

  const { getAllByTestId } = render(
    <>
      {cards.map((card) => (
        <div data-testid="card" key={card.id}>
          <Card {...card} />
        </div>
      ))}
    </>
  )

  expect(getAllByTestId('card')).toHaveLength(1)
})
