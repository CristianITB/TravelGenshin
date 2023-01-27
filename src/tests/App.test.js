// import { screen, render } from '@testing-library/react'
// import { ThemeProvider } from '@emotion/react'
// import { travelportTheme } from '../styles/index'
// import App from '../components/App/App'
import { loadFeatures, autoBindSteps } from 'jest-cucumber'
import * as testHelper from '../helpers/tests.helper.js'
import { screen } from '@testing-library/react'

// test('renders the app', () => {
//   render(
//     <ThemeProvider theme={travelportTheme}>
//       <App />
//     </ThemeProvider>
//   )
//   const linkElement = screen.getByText(/Characters/i)
//   expect(linkElement).toBeInTheDocument()
// })

const features = loadFeatures('./src/tests/App.feature')

const stepsRef = ({ given, and, when, then }) => {
  let props
  let clicked

  const clickHandler = () => {
    clicked = true
  }

  beforeEach(() => {
    clicked = false
    props = {}
  })

  when(/^the developer renders the component "(.*)"$/, (component) => {
    testHelper.renderComponent(
      component.toLowerCase(),
      props
    )
  })

  then(/^the component should show the first menu option "(.*)"$/, (text) => {
    expect(testHelper.getElementTextByTestId('charactersMenuOption')).toBe(text)
  })

  then(/^the component should show the second menu option "(.*)"$/, (text) => {
    expect(testHelper.getElementTextByTestId('artifactsMenuOption')).toBe(text)
  })

  then(/^the component should show the third menu option "(.*)"$/, (text) => {
    expect(testHelper.getElementTextByTestId('weaponsMenuOption')).toBe(text)
  })

  then(/^the component should show the fourth menu option "(.*)"$/, (text) => {
    expect(testHelper.getElementTextByTestId('ostsMenuOption')).toBe(text)
  })

  then(/^the component should show the "(.*)" menu option "(.*)"$/, (element, elementText) => {
    expect(testHelper.getElementTextByTestId(element + 'MenuOption')).toBe(elementText)
  })

  given(/^the developer sets the property "(.*)" to "(.*)"$/, (key, value) => {
    props = testHelper.addProp(props, key, value)
  })

  then(/^the component should show the title "(.*)"$/, (text) => {
    expect(testHelper.getElementTextByTestId('selectedCharacterOptionTitle')).toBe(text)
  })

  and(/^the component should show the button add element with the following text "(.*)"$/, (text) => {
    expect(testHelper.getElementTextByTestId('addElementButton')).toBe(text)
  })

  and(/^the component should show the button show all elements with the following text "(.*)"$/, (text) => {
    expect(testHelper.getElementTextByTestId('showAllElementsButton')).toBe(text)
  })
}

autoBindSteps(features, [stepsRef])
