import axios from 'axios'
import React from 'react'

export function useApiData () {
  const [post, setPost] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      const charactersData = await GetAllCharactersData()
      setPost(charactersData)
      setLoading(false)
    }
    fetchData()
  }, [])
  return { post, loading }
}

async function GetAllCharactersData(){
  const charactersNames = await getCharactersNames()
  const allCharactersData = GetOneCharacterInfo(charactersNames)
  return allCharactersData
}

async function getCharactersNames(){
  const charactersNames = await axios.get('https://api.genshin.dev/characters').then((response) => {return response})
  return charactersNames.data
}

async function GetOneCharacterInfo(charactersNameList){
  const allCharactersData = await axios.all(charactersNameList.map(async (characterName) => {
    const oneCharacterData = await axios.get('https://api.genshin.dev/characters/'+characterName)
    return oneCharacterData.data
  }))
  return allCharactersData
}
