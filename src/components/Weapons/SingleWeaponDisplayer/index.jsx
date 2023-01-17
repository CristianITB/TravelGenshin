import { Frame, WeaponInfo, WeaponImage, WeaponName, WeaponSubStat, WeaponPassive } from './styles'
import React from 'react'

export const SingleWeaponDisplayer = ({weapon}) => {
  return (
    <Frame weaponRarity={weapon.max_rarity}>
      <WeaponImage src={weapon.image} alt={weapon.name}/>
      <WeaponInfo>
        <WeaponName>{weapon.name}</WeaponName>
        <WeaponSubStat><b>Sub-stat:</b> {weapon.subStat}</WeaponSubStat>
        <WeaponPassive><b>Passive:</b> {weapon.passiveDesc}</WeaponPassive>
      </WeaponInfo>
    </Frame>
  )
}

export default SingleWeaponDisplayer
