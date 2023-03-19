import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Tags } from './Tags'

it('render tags', () => {
  render(
    <Tags
      tags={[
        {
          id: '1',
          title: 'Test',
          slug: 'test',
          created_at: '2023-03-18T13:02:23.473Z',
          updated_at: '2023-03-18T13:02:23.473Z',
        },
      ]}
    />
  )
  const message = screen.getByTestId('tags')
  expect(message).toBeInTheDocument()
})
