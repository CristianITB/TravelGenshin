import React from 'react'
import { jest } from '@jest/globals'
import { render, fireEvent, screen } from '@testing-library/react'
import { Header } from '../index'

test('calls the onMenuClick prop with the correct value when a menu item is clicked', () => {
  const onMenuClick = jest.fn()
  render(<Header onMenuClick={onMenuClick} />)

  fireEvent.click(screen.getByTestId('charactersButton'))
  expect(onMenuClick).toHaveBeenCalledWith('Characters')
})

test('passes the correct props', () => {
  const onMenuClick = jest.fn()
  render(<Header onMenuClick={onMenuClick} />)

  expect(screen.getByTestId('charactersButton').onclick).toBeDefined()
})
