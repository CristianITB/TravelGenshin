import { useState, useEffect } from 'react'
import { useApiData } from '../Api/weapons.api'
import SingleWeaponsDisplayer from '../SingleWeaponsDisplayer'
import { WeaponsDisplayer, AddNewWeapon, UnorderedList, AddAllWeapons } from './styles'

export const SelectedWeaponsOption = ({ type }) => {
  let allTypeWeapons = []

  const { loading, post } = useApiData()
  if (!loading) {
    allTypeWeapons = getAllTypeWeapons(type, post)
  }

  const [numberOfWeapons, setNumberOfWeapons] = useState(0)
  const [weaponsDataListState, setWeaponsDataListState] = useState([])

  const addOneWeapon = () => {
    if (numberOfWeapons < allTypeWeapons.length) {
      setNumberOfWeapons(numberOfWeapons + 1)
      setWeaponsDataListState([...weaponsDataListState, allTypeWeapons[numberOfWeapons]])
    } else if (numberOfWeapons === allTypeWeapons.length) {
      setNumberOfWeapons(0)
      setWeaponsDataListState([])
    }
  }

  const showAllWeapons = () => {
    if (numberOfWeapons === 0) {
      setWeaponsDataListState(allTypeWeapons)
      setNumberOfWeapons(allTypeWeapons.length)
    } else if (numberOfWeapons > 0 && numberOfWeapons < allTypeWeapons.length) {
      setNumberOfWeapons(allTypeWeapons.length)
      setWeaponsDataListState(allTypeWeapons)
    } else {
      setNumberOfWeapons(0)
      setWeaponsDataListState([])
    }
  }

  useEffect(() => {
    setWeaponsDataListState([])
    setNumberOfWeapons(0)
  }, [type])

  return (
    <div>
      <UnorderedList>
        <AddNewWeapon onClick={addOneWeapon}>Add {type} weapon</AddNewWeapon>
        <AddAllWeapons onClick={showAllWeapons}>Show all {type} weapons</AddAllWeapons>
      </UnorderedList>
      <WeaponsDisplayer>
        {weaponsDataListState.map((weapon, index) => {
          return <SingleWeaponsDisplayer key={index} weapon={weapon} />
        })}
      </WeaponsDisplayer>
    </div>
  )
}

export default SelectedWeaponsOption

function getAllTypeWeapons (type, allWeaponsData) {
  const WeaponsList = []
  allWeaponsData.forEach(weapon => {
    if (weapon.type === type) {
      WeaponsList.push(weapon)
    }
  })
  return WeaponsList
}

function getAllTypeWeapons(type, allWeaponsData){
  let WeaponsList = []
  allWeaponsData.forEach(weapon => {
    if(weapon.type === type){
        WeaponsList.push(weapon)
    }
  })
  return WeaponsList
}