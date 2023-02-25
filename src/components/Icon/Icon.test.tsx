import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Icon } from './Icon'

it('renders an icon', () => {
  render(<Icon id="webripple" data-testid="webripple" />)
  const icon = screen.getByTestId('webripple')

  expect(icon).toBeInTheDocument()
})
