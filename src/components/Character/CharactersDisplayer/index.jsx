import CharactersOptions from '../CharactersOptions'
import SelectedCharacterOption from '../SelectedCharacterOption'
import { useState } from 'react'

export const CharactersDisplayer = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('')
  let ComponentToRender;

  const handleMenuClick = (menuOption) => {
    setSelectedMenuOption(menuOption)
  }

  switch (selectedMenuOption) {
    case 'Pyro':
        ComponentToRender = <SelectedCharacterOption element={'Pyro'} />;
        break;
    case 'Anemo':
        ComponentToRender = <SelectedCharacterOption element={'Anemo'} />;
        break;
    case 'Cryo':
        ComponentToRender = <SelectedCharacterOption element={'Cryo'} />;
        break;
    case 'Geo':
        ComponentToRender = <SelectedCharacterOption element={'Geo'} />;
        break;
    case 'Electro':
        ComponentToRender = <SelectedCharacterOption element={'Electro'} />;
        break;
    case 'Hydro':
        ComponentToRender = <SelectedCharacterOption element={'Hydro'} />;
        break;
    case 'Dendro':
        ComponentToRender = <SelectedCharacterOption element={'Dendro'} />;
        break;
    case 'Show all characters':
        ComponentToRender = <SelectedCharacterOption element={'Show all'} />;
        break;
    default:
        ComponentToRender = null
  }

  return(
    <div>
      <CharactersOptions onMenuClick={handleMenuClick}/>
      { ComponentToRender }
    </div>
  )
}

export default CharactersDisplayer