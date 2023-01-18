import { useState, useEffect } from 'react'
import { useApiData } from '../Api/artifacts.api'
import SingleRarityDisplayer from '../SingleRarityDisplayer'
import { ArtifactsDisplayer, AddNewArtifact, AddAllArtifacts, UnorderedList } from './styles'

export const SelectedArtifactsOption = ({ rarity }) => {
  let allRarityArtifacts = []

  const { loading, post } = useApiData()
  if (!loading) {
    allRarityArtifacts = getAllRarityArtifacts(rarity, post)
  }

  const [numberOfArtifacts, setNumberOfArtifacts] = useState(0)
  const [artifactsDataListState, setArtifactsDataListState] = useState([])

  const addOneArtifact = () => {
    if (numberOfArtifacts < allRarityArtifacts.length) {
      setNumberOfArtifacts(numberOfArtifacts + 1)
      setArtifactsDataListState([...artifactsDataListState, allRarityArtifacts[numberOfArtifacts]])
    } else if (numberOfArtifacts === allRarityArtifacts.length) {
      setNumberOfArtifacts(0)
      setArtifactsDataListState([])
    }
  }

  const showAllArtifacts = () => {
    if (numberOfArtifacts === 0) {
      setArtifactsDataListState(allRarityArtifacts)
      setNumberOfArtifacts(allRarityArtifacts.length)
    } else if (numberOfArtifacts > 0 && numberOfArtifacts < allRarityArtifacts.length) {
      setNumberOfArtifacts(allRarityArtifacts.length)
      setArtifactsDataListState(allRarityArtifacts)
    } else {
      setNumberOfArtifacts(0)
      setArtifactsDataListState([])
    }
  }

  useEffect(() => {
    setArtifactsDataListState([])
    setNumberOfArtifacts(0)
  }, [rarity])

  return (
    <div>
      <UnorderedList>
        <AddNewArtifact onClick={addOneArtifact}>Add {rarity}⭐ artifact</AddNewArtifact>
        <AddAllArtifacts onClick={showAllArtifacts}>Show all {rarity}⭐ artifact</AddAllArtifacts>
      </UnorderedList>
      <ArtifactsDisplayer>
        {artifactsDataListState.map((artifact, index) => {
          return <SingleRarityDisplayer key={index} artifact={artifact} />
        })}
      </ArtifactsDisplayer>
    </div>
  )
}

export default SelectedArtifactsOption

function getAllRarityArtifacts (rarity, allArtifactsData) {
  const artifactsList = []
  allArtifactsData.forEach(artifact => {
    if (artifact.max_rarity === parseInt(rarity)) {
      artifactsList.push(artifact)
    }
  })
  return artifactsList
}
