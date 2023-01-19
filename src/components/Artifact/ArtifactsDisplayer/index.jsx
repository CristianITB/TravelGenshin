import { useState } from 'react'
import ArtifactsOptions from '../ArtifactsOptions'
import SelectedArtifactOption from '../SelectedArtifactsOption'

export const ArtifactsDataDisplayer = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('')
  let componentToRender

  const handleMenuClick = (menuOption) => {
    setSelectedMenuOption(menuOption)
  }

  switch (selectedMenuOption) {
    case '3⭐':
      componentToRender = <SelectedArtifactOption rarity='3' />
      break
    case '4⭐':
      componentToRender = <SelectedArtifactOption rarity='4' />
      break
    case '5⭐':
      componentToRender = <SelectedArtifactOption rarity='5' />
      break
    case 'Show all characters':
      componentToRender = <SelectedArtifactOption rarity='Show all' />
      break
    default:
      componentToRender = null
  }

  return (
    <div>
      <ArtifactsOptions onMenuClick={handleMenuClick} />
      {componentToRender}
    </div>
  )
}

export default ArtifactsDataDisplayer
