import { useState } from 'react'
import WeaponsOptions from '../WeaponsOptions'
import SelectedWeaponsOption from '../SelectedWeaponsOption'

export const WeaponsDataDisplayer = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('')
  let componentToRender

  const handleMenuClick = (menuOption) => {
    setSelectedMenuOption(menuOption)
  }

  switch (selectedMenuOption) {
    case 'Sword':
      componentToRender = <SelectedWeaponsOption type='Sword' />
      break
    case 'Claymore':
      componentToRender = <SelectedWeaponsOption type='Claymore' />
      break
    case 'Polearm':
      componentToRender = <SelectedWeaponsOption type='Polearm' />
      break
    case 'Catalyst':
      componentToRender = <SelectedWeaponsOption type='Catalyst' />
      break
    case 'Bow':
      componentToRender = <SelectedWeaponsOption type='Bow' />
      break
    case 'Show all characters':
      componentToRender = <SelectedWeaponsOption Type='Show all' />
      break
    default:
      componentToRender = null
  }

  return (
    <div>
      <WeaponsOptions onMenuClick={handleMenuClick} />
      {componentToRender}
    </div>
  )
}

export default WeaponsDataDisplayer
