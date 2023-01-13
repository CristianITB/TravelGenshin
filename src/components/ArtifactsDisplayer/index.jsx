// import SingleUserDataDisplayer from '../SingleUserDataDisplayer'
import { UnorderedListArtifacts, ArtifactsDisplayer, ArtifactInfoImage5 ,Artifact5Container ,ArtifactInfo, ArtifactInfoImage ,Artifact4Star, TitleComponent, AddFiveStar, AddFourStar, Artifact4Container, ArtifactInfoTitle, ArtifactInfoBonus, ArtifactInfoBonusTitle } from './styles'
 import { useState } from 'react'
//import { App } from '../../helpers/axios.helper'
// import travelportLogo from './resources/images/Travelport-Logo.png'
import { artifacts } from '../../resources/data/ArtifactsSample'

// const baseURL = 'https://api.genshin.dev/artifacts'

export const ArtifactsDataDisplayer = () => {
  // const artifactsDataFromApi = App(baseURL)
  // const [numberArtifacts, setnumberArtifacts] = useState(0)
  // const [artifactsData, setArtifactsData] = useState([])

  // const modifyList = () => {
  //   if (numberOfUsers < artifactsDataFromApi.results.length) {
  //       setnumberArtifacts(numberArtifacts + 1)
  //     setArtifactsData([...artifactsData, artifactsDataFromApi.results[numberOfUsers]])
  //   } else if (numberOfUsers === artifactsDataFromApi.results.length) {
  //       setnumberArtifacts(0)
  //     setArtifactsData([]) 
  //   }
  // }

  return (
    <div>
      <TitleComponent>Artifacts</TitleComponent>
        <AddFourStar>4⭐</AddFourStar>
        <AddFiveStar>5⭐</AddFiveStar>
      <Artifact4Star>Hola</Artifact4Star>
      <ArtifactsDisplayer>
        <Artifact4Container>
          <ArtifactInfoImage />
            <ArtifactInfo>
              <ArtifactInfoTitle>Berserker</ArtifactInfoTitle>
              <UnorderedListArtifacts>
                <ArtifactInfoBonusTitle>2 Bonus set: </ArtifactInfoBonusTitle>
                <ArtifactInfoBonus>CRIT Rate +12%".</ArtifactInfoBonus>
                <ArtifactInfoBonusTitle>4 Bonus set: </ArtifactInfoBonusTitle>
                <ArtifactInfoBonus>When HP is below 70%, CRIT Rate increases by an additional 24%.</ArtifactInfoBonus>
            </UnorderedListArtifacts>
            </ArtifactInfo>
        </Artifact4Container>

        <Artifact5Container>
          <ArtifactInfoImage5 />
            <ArtifactInfo>
              <ArtifactInfoTitle>Crimson Witch of Flames</ArtifactInfoTitle>
              <UnorderedListArtifacts>
                <ArtifactInfoBonusTitle>2 Bonus set: </ArtifactInfoBonusTitle>
                <ArtifactInfoBonus>Gain a 15% Pyro DMG Bonus.</ArtifactInfoBonus>
                <ArtifactInfoBonusTitle>4 Bonus set: </ArtifactInfoBonusTitle>
                <ArtifactInfoBonus>Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.</ArtifactInfoBonus>
            </UnorderedListArtifacts>
            </ArtifactInfo>
        </Artifact5Container>
      </ArtifactsDisplayer>
    </div>
  )
}

export default ArtifactsDataDisplayer

// {usersDataListState.map((artifact, index) => {
//   return (
//     <SingleUserDataDisplayer key={index} artifactName={artifact.name} artifactRarity={artifact.max_rarity + "⭐"} artifactsFirstBonus={artifact.piece_bonus} artifactsSecondBonus={artifact.piece_bonus} />
//   )
// })}