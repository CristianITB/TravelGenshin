import Header from '../Header'
import { useState } from 'react'
import CharactersDisplayer from '../CharactersDisplayer'
import ArtifactsDisplayer from '../ArtifactsDisplayer'
import WeaponsDisplayer from '../WeaponsDisplayer'
import OstsDisplayer from '../OstsDisplayer'

export const GenshinDisplayer = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('')
  let ComponentToRender;

  const handleMenuClick = (menuOption) => {
    setSelectedMenuOption(menuOption);
  };

  switch (selectedMenuOption) {
    case 'Characters':
        ComponentToRender = <CharactersDisplayer />;
        break;
    case 'Artifacts':
        ComponentToRender = <ArtifactsDisplayer />;
        break;
    case 'Weapons':
        ComponentToRender = <WeaponsDisplayer />;
        break;
    case 'OSTs':
        ComponentToRender = <OstsDisplayer />;
        break;
    default:
        ComponentToRender = null
  }

  return (
    <div>
       <Header onMenuClick={handleMenuClick}/>
       { ComponentToRender }
    </div>
  );
}

export default GenshinDisplayer
