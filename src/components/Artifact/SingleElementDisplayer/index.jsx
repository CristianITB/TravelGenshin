import { UnorderedListArtifacts, ArtifactInfo, ArtifactInfoImage, Artifact4Container, ArtifactInfoTitle, ArtifactInfoBonusTitle } from '../ArtifactsDisplayer/styles'
import React from 'react'

export const SingleElementDisplayer = (props) => {
  console.log(props[1])
    return (
      <Artifact4Container>
        <ArtifactInfoImage />
          <ArtifactInfo>
            <ArtifactInfoTitle>{props[0]}</ArtifactInfoTitle>
            <UnorderedListArtifacts>
              <ArtifactInfoBonusTitle>{props['2-piece_bonus']}</ArtifactInfoBonusTitle>
              <ArtifactInfoBonusTitle>{props[2]}</ArtifactInfoBonusTitle>
          </UnorderedListArtifacts>
          </ArtifactInfo>
      </Artifact4Container>
    )
  }


export default SingleElementDisplayer
