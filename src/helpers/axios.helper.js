import axios from 'axios'
import React from 'react'

export function useApiData (baseURL) {
  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const manolo = await GetAllCharactersData()
      setPost(manolo)
    }
    fetchData()
  }, [baseURL])
  return post
}

async function getCharactersNames(){

   const pepe = await axios.get('https://api.genshin.dev/characters').then((response) => {return response})

  return pepe.data
}

async function GetOneCharacterInfo(charactersNameList){

  const datachar = await axios.all(charactersNameList.map( async (characterName) => {
    const prueba = await axios.get('https://api.genshin.dev/characters/'+characterName)
    return prueba.data
  }))
  return datachar
}

async function GetAllCharactersData(){
  // let allCharactersData = []
  const charactersNames = await getCharactersNames()
  const datachar = GetOneCharacterInfo(charactersNames)
  return datachar
  // if(charactersNames == null){

  // }

  // console.log(charactersNames)
  // for(let i=0; i<charactersNames.length; i++){
  //   allCharactersData.push(GetOneCharacterInfo(charactersNames[i]))
  // }

  // return allCharactersData
}

function getIt(){
  
}