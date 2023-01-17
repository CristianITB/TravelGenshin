import { useState } from 'react'
import { useApiData } from '../Helper/axios.helper'
import SingleWeaponsDisplayer from '../SingleWeaponsDisplayer'
import { WeaponsDisplayer, AddNewWeapon, AddAllWeapons } from '../WeaponsDisplayer/styles'

export const SelectedWeaponsOption = ({type}) => {
  let allTypeWeapons = []

  const {loading, post} = useApiData()
  if(loading){
    console.log(loading, 'loading...')
  } else {
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
    if(numberOfWeapons === 0){
    setWeaponsDataListState(allTypeWeapons)
    setNumberOfWeapons(allTypeWeapons.length)
    } else{
      setNumberOfWeapons(0)
      setWeaponsDataListState([])
    }
  }

  return (
      <div>
        <AddNewWeapon onClick={addOneWeapon}>Add {type} weapon</AddNewWeapon>
        <AddAllWeapons onClick={showAllWeapons}>Show all {type} weapons</AddAllWeapons>
        <WeaponsDisplayer>
          {weaponsDataListState.map((weapon, index) => {
            return <SingleWeaponsDisplayer key={index} weapon={weapon}/>
          })}
        </WeaponsDisplayer>
      </div>
  );
}

export default SelectedWeaponsOption


function getAllTypeWeapons(type, allWeaponsData){
  let WeaponsList = []
  allWeaponsData.forEach(weapon => {
    if(weapon.type === type){
        WeaponsList.push(weapon)
    }
  })
  return WeaponsList
}