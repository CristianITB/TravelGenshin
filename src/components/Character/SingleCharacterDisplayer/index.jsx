import { Frame, CharacterInfo, CharacterImage, CharacterInfoTitle, CharacterWeapon, ListOfData, CharacterNation, CharacterConstellation } from './styles'
import React from 'react'

export const SingleCharacterDisplayer = ({ character }) => {
  const addImageFallback = (event) => {
    if (character.vision === 'Pyro') {
      event.currentTarget.src = 'https://api.genshin.dev/characters/xiangling/icon'
    } else if (character.vision === 'Anemo') {
      event.currentTarget.src = 'https://api.genshin.dev/characters/kazuha/icon'
    } else if (character.vision === 'Cryo') {
      event.currentTarget.src = 'https://api.genshin.dev/characters/kaeya/icon'
    } else if (character.vision === 'Geo') {
      event.currentTarget.src = 'https://api.genshin.dev/characters/zhongli/icon'
    } else if (character.vision === 'Electro') {
      event.currentTarget.src = 'https://api.genshin.dev/characters/raiden/icon'
    } else if (character.vision === 'Hydro') {
      event.currentTarget.src = 'https://api.genshin.dev/characters/xingqiu/icon'
    } else if (character.vision === 'Dendro') {
      event.currentTarget.src = 'https://genshin.honeyhunterworld.com/img/alhatham_078.webp'
    }
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
