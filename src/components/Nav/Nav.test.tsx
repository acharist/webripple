import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Nav } from './Nav'

jest.mock('next/router', () => require('next-router-mock'))

it('renders the "Главная" menu item', () => {
  render(<Nav />)
  const message = screen.getByText(/Главная/i)
  expect(message).toBeInTheDocument()
})

it('renders the "Контакты" menu item', () => {
  render(<Nav />)
  const message = screen.getByText(/Контакты/i)
  expect(message).toBeInTheDocument()
})
