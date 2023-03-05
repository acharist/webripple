import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Item } from './Item'

jest.mock('next/router', () => require('next-router-mock'))

it('renders the "Контакты" menu item', () => {
  render(<Item name={'Контакты'} href={'/kontakty'} />)
  const message = screen.getByText(/Контакты/i)
  expect(message).toBeInTheDocument()
})
