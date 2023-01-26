import React from 'react'
import { render } from 'react-testing-library'
import { describe, it } from 'jest'
import Header from './header'

describe('Header', () => {
  it('contains elements with the correct text and data-testid values', () => {
    const { getByText, getByTestId } = render(<Header onMenuClick={() => {}} />)
    expect(getByText('TravelGenshin')).toBeInTheDocument()
    expect(getByTestId('charactersButton').textContent).toBe('Characters')
    expect(getByTestId('artifactsButton').textContent).toBe('Artifacts')
    expect(getByTestId('weaponsButton').textContent).toBe('Weapons')
    expect(getByTestId('ostsButton').textContent).toBe('OSTs')
  })
})
