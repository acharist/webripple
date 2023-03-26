import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

jest.mock('next/router', () => require('next-router-mock'))

it('renders links', () => {
  render(<Footer />)
  const confidentiality = screen.getByTestId('confidentiality')
  const intelligence = screen.getByTestId('intelligence')
  const copyright = screen.getByTestId('copyright')

  expect(confidentiality).toBeInTheDocument()
  expect(intelligence).toBeInTheDocument()
  expect(copyright).toBeInTheDocument()
})
