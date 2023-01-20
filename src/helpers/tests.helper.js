import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import createComponent from './components.helper.js'

export const clickComponentByTestId = id => {
  fireEvent.click(screen.getByTestId(id))
}

export const getElementTextByTestId = id => {
  return screen.getByTestId(id).textContent
}

export const isTextInTheComponent = text => {
  const element = screen.getByText(new RegExp(text, ''))
  return element !== null
}

export const addProp = (previousProps, newKey, newValue) => {
  previousProps[newKey] = newValue
  return previousProps
}

export const renderComponent = (
  component,
  props = undefined,
  childrenComponent = undefined,
  childrenProps = undefined
) => {
  let newComponent
  if (childrenComponent !== undefined && childrenComponent !== '') {
    newComponent = createComponent(
      component,
      typeof props === 'object' ? props : JSON.parse(props),
      childrenComponent,
      typeof props === 'object' ? childrenProps : JSON.parse(childrenProps)
    )
  } else {
    newComponent = createComponent(
      component,
      typeof props === 'object' ? props : JSON.parse(props)
    )
  }
  render(<>{newComponent}</>)
}

export const checkIfDataTestIdExists = testId => {
  const element = document.querySelector(`[data-testid="${testId}"]`)
  return element !== null
}
