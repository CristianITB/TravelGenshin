import Header from '../Header'
import { useState } from 'react'
import CharactersDisplayer from '../Character/CharactersDisplayer'
import ArtifactsDisplayer from '../Artifact/ArtifactsDisplayer'
import WeaponsDisplayer from '../Weapon/WeaponsDisplayer'
import OstsDisplayer from '../OstsDisplayer'

export const MainDisplayer = () => {
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

export default MainDisplayer
