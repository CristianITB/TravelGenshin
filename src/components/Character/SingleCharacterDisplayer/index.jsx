import { Frame, CharacterInfo, CharacterImage, CharacterName, CharacterWeapon, CharacterNation, CharacterConstellation } from './styles'
import React from 'react'

export const SingleCharacterDisplayer = ({character}) => {
  return (
    <Frame characterElement={character.vision}>
      <CharacterImage src={character.image} alt={character.name}/>
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName>
        <CharacterWeapon>Weapon: {character.weapon}</CharacterWeapon>
        <CharacterNation>Nation: {character.nation}</CharacterNation>
        <CharacterConstellation>Constellation: {character.constellation}</CharacterConstellation>
      </CharacterInfo>
    </Frame>
  )
}

export default SingleCharacterDisplayer
