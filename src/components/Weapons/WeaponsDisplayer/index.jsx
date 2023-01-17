import WeaponsOptions from '../WeaponsOptions'
import SelectedWeaponOption from '../SelectedWeaponOption'
import { useState } from 'react'

export const WeaponsDisplayer = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('')
  let ComponentToRender;

  const handleMenuClick = (menuOption) => {
    setSelectedMenuOption(menuOption)
  }

  switch (selectedMenuOption) {
    case '4':
        ComponentToRender = <SelectedWeaponOption rarity={4} />;
        break;
    case '5':
        ComponentToRender = <SelectedWeaponOption rarity={5} />;
        break;
    case 'Show all':
        ComponentToRender = <SelectedWeaponOption element={'Show all'} />;
        break;
    default:
        ComponentToRender = null
  }

  return(
    <div>
      <WeaponsOptions onMenuClick={handleMenuClick}/>
      { ComponentToRender }
    </div>
  )
}

export default WeaponsDisplayer