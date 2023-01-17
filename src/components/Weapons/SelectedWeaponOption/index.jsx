import { Frame, Title, ButtonsContainer, AddWeaponButton, ShowAllWeaponsButton, WeaponsContainer } from './styles'
import { useState } from 'react'
import { useApiData } from '../Api/weapons.api'
import SingleWeaponDisplayer from '../SingleWeaponDisplayer'

export const SelectedWeaponOption = ({rarity}) => {
  let allRarityWeapons = []

  const {loading, post} = useApiData()
  if(!loading){
    allRarityWeapons = getAllRarityWeapons(rarity, post)
  }

  const [numberOfWeapons, setNumberOfWeapons] = useState(0)
  const [weaponsDataListState, setWeaponsDataListState] = useState([])

  const addOneWeapon = () => {
    if (numberOfWeapons < allRarityWeapons.length) {
        setNumberOfWeapons(numberOfWeapons + 1)
        setWeaponsDataListState([...weaponsDataListState, allRarityWeapons[numberOfWeapons]])
    } else if (numberOfWeapons === allRarityWeapons.length) {
        setNumberOfWeapons(0)
        setWeaponsDataListState([])
    }
  }

  const showAllWeapons = () => {
    if(numberOfWeapons === 0){
        setNumberOfWeapons(allRarityWeapons.length)
        setWeaponsDataListState(allRarityWeapons)
    } else if(numberOfWeapons > 0 && numberOfWeapons < allRarityWeapons.length) {
        setNumberOfWeapons(allRarityWeapons.length)
        setWeaponsDataListState(allRarityWeapons)
    } else{
        setNumberOfWeapons(0)
        setWeaponsDataListState([])
    }
  }

  return (
      <Frame>
        <Title>{rarity} weapons</Title>
        <ButtonsContainer>
          <AddWeaponButton weaponRarity={rarity} onClick={addOneWeapon}>Add {rarity} weapon</AddWeaponButton>
          <ShowAllWeaponsButton onClick={showAllWeapons}>Show all {rarity} weapons</ShowAllWeaponsButton>
        </ButtonsContainer>
        <WeaponsContainer>
          {weaponsDataListState.map((weapon, index) => {
            return <SingleWeaponDisplayer key={index} weapon={weapon}/>
          })}
        </WeaponsContainer>
      </Frame>
  );
}

export default SelectedWeaponOption

function getAllRarityWeapons(rarity, allWeaponsData){
  let weaponsList = []
  allWeaponsData.forEach(weapon => {
    if(weapon.rarity === parseInt(rarity)){
      weaponsList.push(weapon)
    }
  })
  return weaponsList
}