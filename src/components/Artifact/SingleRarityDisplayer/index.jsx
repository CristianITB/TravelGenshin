import { UnorderedListArtifacts, ArtifactContainer, ArtifactInfo, ArtifactInfoImage, ArtifactInfoTitle, ArtifactInfoBonusTitle, ArtifactInfoBonus } from './styles'
import React from 'react'

export const SingleRarityDisplayer = ({artifact}) => {
  const regex = /'|\s/g
  const addImageFallback = (event) => {
    artifact.max_rarity === 5 ?
      event.currentTarget.src = 'https://api.genshin.dev/artifacts/viridescent-venerer/circlet-of-logos' :
        event.currentTarget.src = 'https://api.genshin.dev/artifacts/prayers-for-destiny/circlet-of-logos'
  }
    return (
      <ArtifactContainer max_rarity={artifact.max_rarity}>
        <ArtifactInfoImage src={`https://api.genshin.dev/artifacts/${artifact.name.toLowerCase().replace(regex, '-')}/circlet-of-logos`} 
          onError={addImageFallback}/>
        <ArtifactInfo>
          <ArtifactInfoTitle>{artifact.name}</ArtifactInfoTitle>
          <UnorderedListArtifacts>
            <ArtifactInfoBonusTitle>2 Piece Bonus: </ArtifactInfoBonusTitle>
            <ArtifactInfoBonus>{artifact['2-piece_bonus']}</ArtifactInfoBonus>
            <ArtifactInfoBonusTitle>4 Piece Bonus: </ArtifactInfoBonusTitle>
            <ArtifactInfoBonus>{artifact['4-piece_bonus']}</ArtifactInfoBonus>
        </UnorderedListArtifacts>
        </ArtifactInfo>
      </ArtifactContainer>
    )
  }


export default SingleRarityDisplayer
