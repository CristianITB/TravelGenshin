import { useState } from 'react'
import { useApiData } from '../Helper/axios.helper'
import SingleElementDisplayer from '../SingleElementDisplayer'
import { ArtifactsDisplayer, AddNewArtifact, AddAllArtifacts } from '../ArtifactsDisplayer/styles'

export const SelectedArtifactsOption = ({rarity}) => {
  let allRarityArtifacts = []

  const {loading, post} = useApiData()
  if(loading){
    console.log(loading, 'loading...')
  } else {
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
    if(numberOfArtifacts === 0){
    setArtifactsDataListState(allRarityArtifacts)
    setNumberOfArtifacts(allRarityArtifacts.length)
    } else{
      setNumberOfArtifacts(0)
      setArtifactsDataListState([])
    }
  }

  return (
      <div>
        <AddNewArtifact onClick={addOneArtifact}>Add {rarity}⭐ character</AddNewArtifact>
        <AddAllArtifacts onClick={showAllArtifacts}>Show all {rarity}⭐ characters</AddAllArtifacts>
        <ArtifactsDisplayer>
          {artifactsDataListState.map((artifact, index) => {
            return <SingleElementDisplayer key={index} artifact={artifact}/>
          })}
        </ArtifactsDisplayer>
      </div>
  );
}

export default SelectedArtifactsOption


function getAllRarityArtifacts(rarity, allArtifactsData){
  let artifactsList = []
  allArtifactsData.forEach(artifact => {
    if(artifact.max_rarity === parseInt(rarity)){
        artifactsList.push(artifact)
    }
  })
  return artifactsList
}