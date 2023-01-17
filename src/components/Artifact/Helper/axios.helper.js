import axios from 'axios'
import React from 'react'

export function useApiData () {
  const [post, setPost] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      const artifactsData = await GetAllArtifactsData()
      setPost(artifactsData)
      setLoading(false)
    }
    fetchData()
  }, [])
  return { post, loading }
}

async function GetAllArtifactsData(){
  const artifactsNames = await getArtifactsNames()
  const allArtifactsData = GetOneArtifactInfo(artifactsNames)
  return allArtifactsData
}

async function getArtifactsNames(){
  const artifactsNames = await axios.get('https://api.genshin.dev/artifacts').then((response) => {return response})
  return artifactsNames.data
}

async function GetOneArtifactInfo(artifactsNameList){
  const allArtifactsData = await axios.all(artifactsNameList.map(async (artifactName) => {
    const oneArtifactData = await axios.get('https://api.genshin.dev/artifacts/'+artifactName)
    return oneArtifactData.data
  }))
  return allArtifactsData
}