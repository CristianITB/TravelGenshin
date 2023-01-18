import { UnorderedListWeapons, WeaponInfo, WeaponContainer, WeaponStatsDiv, WeaponSubStat, WeaponInfoImage, WeaponAtkStat, WeaponInfoTitle, WeaponInfoBonusTitle, WeaponInfoBonus } from './styles'
import React from 'react'

export const SingleWeaponsDisplayer = ({weapon}) => {
  const regex = /'|\s/g
  const addImageFallback = (event) => {
    weapon.type === 'Claymore' ?
      event.currentTarget.src = 'https://api.genshin.dev/weapons/wolf-s-gravestone/icon' :
        weapon.type === 'Bow' ?
        event.currentTarget.src = 'https://api.genshin.dev/weapons/thundering-pulse/icon' :
          weapon.type === 'Sword' ?
          event.currentTarget.src = 'https://api.genshin.dev/weapons/primordial-jade-cutter/icon' :
            weapon.type === 'Polearm' ?
            event.currentTarget.src = 'https://api.genshin.dev/weapons/engulfing-lightning/icon' :
              event.currentTarget.src = 'https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds/icon';
  }
    return (
      <WeaponContainer weaponRarity={weapon.rarity}>
        <WeaponInfoImage src={`https://api.genshin.dev/weapons/${weapon.name.toLowerCase().replace(regex, '-')}/icon`} 
          onError={addImageFallback}/>
            <WeaponInfo>
              <WeaponInfoTitle>{weapon.name}</WeaponInfoTitle>
              <UnorderedListWeapons>
                <WeaponStatsDiv>
                  <WeaponAtkStat><b>ATK:</b> {weapon.baseAttack}</WeaponAtkStat>
                  <WeaponSubStat><b>SubStat:</b> {weapon.subStat}</WeaponSubStat>
                </WeaponStatsDiv>
                <WeaponInfoBonusTitle>Passive - {weapon.passiveName}: </WeaponInfoBonusTitle>
                <WeaponInfoBonus>{weapon.passiveDesc}</WeaponInfoBonus>
            </UnorderedListWeapons>
            </WeaponInfo>
      </WeaponContainer>
    )
  }
export default SingleWeaponsDisplayer
