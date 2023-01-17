import { UnorderedListWeapons, WeaponInfo, WeaponInfoImage, Weapon4Container, Weapon5Container, WeaponInfoTitle, WeaponInfoBonusTitle, WeaponInfoBonus } from '../WeaponsDisplayer/styles'
import React from 'react'

export const SingleWeaponsDisplayer = (props) => {
  const regex = /'|\s/g
  const addImageFallback = (event) => {
    event.currentTarget.src = 'https://api.genshin.dev/weapons/wolf-s-gravestone/icon';
  }
    return (
    //   props.weapon.type === "Sword" 
    //     ?
        <Weapon5Container>
          <WeaponInfoImage src={`https://api.genshin.dev/weapons/${props.weapon.name.toLowerCase().replace(regex, '-')}/icon`} 
          onError={addImageFallback}/>
            <WeaponInfo>
              <WeaponInfoTitle>{props.weapon.name}</WeaponInfoTitle>
              <UnorderedListWeapons>
                <WeaponInfoBonusTitle>SubStat: </WeaponInfoBonusTitle>
                <WeaponInfoBonus>{props.weapon.subStat}</WeaponInfoBonus>
                <WeaponInfoBonusTitle>Passive - {props.weapon.passiveName}: </WeaponInfoBonusTitle>
                <WeaponInfoBonus>{props.weapon.passiveDesc}</WeaponInfoBonus>
            </UnorderedListWeapons>
            </WeaponInfo>
        </Weapon5Container>
        // :
        // <Weapon4Container>
        //       <WeaponInfoImage src={`https://api.genshin.dev/weapons/${props.weapon.name.toLowerCase().replace(regex, '-')}/icon`}onError={addImageFallback}/>
        //       <WeaponInfo>
        //       <WeaponInfoTitle>{props.weapon.name}</WeaponInfoTitle>
        //       <UnorderedListWeapons>
        //         <WeaponInfoBonusTitle>2 Piece Bonus: </WeaponInfoBonusTitle>
        //         <WeaponInfoBonus>{props.weapon['2-piece_bonus'] || props.Weapon['1-piece_bonus']}</WeaponInfoBonus>
        //         <WeaponInfoBonusTitle>4 Piece Bonus: </WeaponInfoBonusTitle>
        //         <WeaponInfoBonus>{props.weapon['4-piece_bonus']}</WeaponInfoBonus>
        //     </UnorderedListWeapons>
        //     </WeaponInfo>
        // </Weapon4Container>
    )
  }


export default SingleWeaponsDisplayer
