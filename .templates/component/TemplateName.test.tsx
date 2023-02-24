import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TemplateName } from './TemplateName'

it('renders a message', () => {
  render(<TemplateName />)
  const message = screen.getByText(/TemplateName Component/i)
  expect(message).toBeInTheDocument()
})
