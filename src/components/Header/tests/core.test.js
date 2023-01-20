import { loadFeatures, autoBindSteps } from 'jest-cucumber'
import * as testHelper from '../../../helpers/tests.helper.js'

const features = loadFeatures('./src/components/Header/tests/*.feature')

const stepsRef = ({ given, and, when, then }) => {
  let props
  let childrenProps
  let childrenComponentName
  let clicked

  const clickHandler = () => {
    clicked = true
  }

  beforeEach(() => {
    clicked = false
    props = {}
    childrenProps = {}
    childrenComponentName = ''
  })

  given(/^the developer links the property "([^"]*)" to an event handler$/,
    key => {
      props = testHelper.addProp(props, key, clickHandler)
    })

  when('the developer renders the component', () => {
    testHelper.renderComponent(
      'header',
      props,
      childrenComponentName,
      childrenProps
    )
  })

  and('the developer clicks on the component', () => {
    testHelper.clickComponentByTestId('charactersButton')
  })

  then('the event handler should be triggered', () => {
    expect(clicked).toBe(true)
  })
}

autoBindSteps(features, [stepsRef])
