import axios from 'axios'
import React from 'react'

export function useApiData () {
  const [post, setPost] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      const weaponsData = await GetAllWeaponsData()
      setPost(weaponsData)
      setLoading(false)
    }
    fetchData()
  }, [])
  return { post, loading }
}

async function GetAllWeaponsData(){
  const weaponsNames = await getWeaponsNames()
  const allWeaponsData = GetOneWeaponInfo(weaponsNames)
  return allWeaponsData
}

async function getWeaponsNames(){
  const weaponsNames = await axios.get('https://api.genshin.dev/weapons').then((response) => {return response})
  return weaponsNames.data
}

async function GetOneWeaponInfo(weaponsNameList){
  const allWeaponsData = await axios.all(weaponsNameList.map(async (weaponName) => {
    const oneWeaponData = await axios.get('https://api.genshin.dev/weapons/'+weaponName)
    return oneWeaponData.data
  }))
  return allWeaponsData
}
