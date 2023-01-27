import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import App from '../components/App/App'
import CharactersDisplayer from '../components/Character/CharactersDisplayer'
import SelectedCharacterOption from '../components/Character/SelectedCharacterOption'

const Components = {
  app: App,
  charactersdisplayer: CharactersDisplayer,
  selectedcharacteroption: SelectedCharacterOption
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
