import { useState } from 'react'
import ArtifactsOptions from '../ArtifactsOptions'
import SelectedArtifactOption from '../SelectedArtifactsOption'
//import { App } from '../../helpers/axios.helper'¡

// const baseURL = 'https://api.genshin.dev/artifacts'

export const ArtifactsDataDisplayer = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('')
  let componentToRender

const handleMenuClick = (menuOption) => {
  setSelectedMenuOption(menuOption)
}

switch(selectedMenuOption){
  case '4⭐':
    componentToRender = <SelectedArtifactOption element={'FourStar'} />;
    break
  case '5⭐':
    componentToRender = <SelectedArtifactOption element={'FiveStar'} />;
    break
  case 'Show all characters':
    componentToRender = <SelectedArtifactOption element={'Show all'} />;
    break
  default:
    componentToRender = null
}

  return (
    <div>
      <ArtifactsOptions onMenuClick={handleMenuClick}/>
      { componentToRender }
    </div>
  )
}

export default ArtifactsDataDisplayer
