import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import App from '../components/App'
import Geek from '../components/Geek'

const Components = {
  app: App,
  geek: Geek
}

const createComponent = (
  componentName,
  props,
  childrenComponentName = undefined,
  childrenProps = undefined
) => {
  if (typeof Components[componentName] !== 'undefined') {
    if (childrenComponentName === undefined) {
      return React.createElement(Components[componentName], {
        key: uuidv4(),
        ...props
      })
    } else {
      const childrenComponent = React.createElement(
        Components[childrenComponentName],
        {
          key: uuidv4(),
          ...childrenProps
        }
      )
      const newComponent = React.createElement(
        Components[componentName],
        {
          key: uuidv4(),
          ...props
        },
        childrenComponent
      )
      return newComponent
    }
  }
  return React.createElement(() => (
    <div>The component {componentName} has not been created yet.</div>
  ))
}

export default createComponent
