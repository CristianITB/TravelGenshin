import { Frame, CharacterInfo, CharacterImage, CharacterInfoTitle, CharacterWeapon, ListOfData, CharacterNation, CharacterConstellation } from './styles'
import React from 'react'

export const SingleCharacterDisplayer = ({character}) => {
  const addImageFallback = (event) => {
    event.currentTarget.src = 'https://api.genshin.dev/characters/zhongli/icon';
  }
  return (
    <Frame characterElement={character.vision}>
      <CharacterImage src={`https://api.genshin.dev/characters/${character.name.toLowerCase()}/icon`} alt={character.name} onError={addImageFallback} />
      <CharacterInfo>
        <CharacterInfoTitle>{character.name}</CharacterInfoTitle>
        <ListOfData>
          <CharacterWeapon><b>Weapon:</b> {character.weapon}</CharacterWeapon>
          <CharacterNation><b>Nation:</b> {character.nation}</CharacterNation>
          <CharacterConstellation><b>Constellation:</b> {character.constellation}</CharacterConstellation>
        </ListOfData>
      </CharacterInfo>
    </Frame>
  )
}

export default SingleCharacterDisplayer
