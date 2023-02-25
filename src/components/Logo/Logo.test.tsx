import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

it('renders the logo', () => {
  render(<Logo />)
  const logo = screen.getByText(/Webripple/i)

  expect(logo).toBeInTheDocument()
})
