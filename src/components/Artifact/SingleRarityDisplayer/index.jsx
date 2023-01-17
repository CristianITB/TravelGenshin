import { UnorderedListArtifacts, ArtifactInfo, ArtifactInfoImage, Artifact4Container, Artifact5Container, ArtifactInfoTitle, ArtifactInfoBonusTitle, ArtifactInfoBonus } from '../ArtifactsDisplayer/styles'
import React from 'react'

export const SingleRarityDisplayer = (props) => {
  const regex = /'|\s/g
  const addImageFallback = (event) => {
    event.currentTarget.src = 'https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life';
  }
    return (
      props.artifact.max_rarity === 5 
        ?
        <Artifact5Container>
          <ArtifactInfoImage src={`https://api.genshin.dev/artifacts/${props.artifact.name.toLowerCase().replace(regex, '-')}/flower-of-life`} 
          onError={addImageFallback}/>
            <ArtifactInfo>
              <ArtifactInfoTitle>{props.artifact.name}</ArtifactInfoTitle>
              <UnorderedListArtifacts>
                <ArtifactInfoBonusTitle>2 Piece Bonus: </ArtifactInfoBonusTitle>
                <ArtifactInfoBonus>{props.artifact['2-piece_bonus']}</ArtifactInfoBonus>
                <ArtifactInfoBonusTitle>4 Piece Bonus: </ArtifactInfoBonusTitle>
                <ArtifactInfoBonus>{props.artifact['4-piece_bonus']}</ArtifactInfoBonus>
            </UnorderedListArtifacts>
            </ArtifactInfo>
        </Artifact5Container>
        :
        <Artifact4Container>
              <ArtifactInfoImage src={`https://api.genshin.dev/artifacts/${props.artifact.name.toLowerCase().replace(regex, '-')}/flower-of-life`}onError={addImageFallback}/>
              <ArtifactInfo>
              <ArtifactInfoTitle>{props.artifact.name}</ArtifactInfoTitle>
              <UnorderedListArtifacts>
                <ArtifactInfoBonusTitle>2 Piece Bonus: </ArtifactInfoBonusTitle>
                <ArtifactInfoBonus>{props.artifact['2-piece_bonus'] || props.artifact['1-piece_bonus']}</ArtifactInfoBonus>
                <ArtifactInfoBonusTitle>4 Piece Bonus: </ArtifactInfoBonusTitle>
                <ArtifactInfoBonus>{props.artifact['4-piece_bonus']}</ArtifactInfoBonus>
            </UnorderedListArtifacts>
            </ArtifactInfo>
        </Artifact4Container>
    )
  }


export default SingleRarityDisplayer
