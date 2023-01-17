import { Frame, Title, ButtonsContainer, AddCharacterButton, ShowAllCharactersButton, CharactersContainer } from './styles'
import { useState } from 'react'
import { useApiData } from '../Api/characters.api'
import SingleCharacterDisplayer from '../SingleCharacterDisplayer'

export const SelectedCharacterOption = ({element}) => {
  let allElementCharacters = []
  const showingAllCharacters = (element === "Show all" ? true : false)
  // Hay que mirar como hacer esto

  const {loading, post} = useApiData()
  if(!loading){
    allElementCharacters = getAllElementCharacters(element, post)
  }

  const [numberOfCharacters, setNumberOfCharacters] = useState(0)
  const [charactersDataListState, setCharactersDataListState] = useState([])

  const addOneCharacter = () => {
    if (numberOfCharacters < allElementCharacters.length) {
      setNumberOfCharacters(numberOfCharacters + 1)
      setCharactersDataListState([...charactersDataListState, allElementCharacters[numberOfCharacters]])
    } else if (numberOfCharacters === allElementCharacters.length) {
      setNumberOfCharacters(0)
      setCharactersDataListState([])
    }
  }

  const showAllCharacters = () => {
    if(numberOfCharacters === 0){
    setNumberOfCharacters(allElementCharacters.length)
    setCharactersDataListState(allElementCharacters)
    } else if(numberOfCharacters > 0 && numberOfCharacters < allElementCharacters.length) {
      setNumberOfCharacters(allElementCharacters.length)
      setCharactersDataListState(allElementCharacters)
    } else{
      setNumberOfCharacters(0)
      setCharactersDataListState([])
    }
  }

  return (
      <Frame>
        <Title>{element} characters</Title>
        <ButtonsContainer>
          <AddCharacterButton characterElement={element} onClick={addOneCharacter}>Add {element} character</AddCharacterButton>
          <ShowAllCharactersButton onClick={showAllCharacters}>Show all {element} characters</ShowAllCharactersButton>
        </ButtonsContainer>
        <CharactersContainer>
          {charactersDataListState.map((character, index) => {
            return <SingleCharacterDisplayer key={index} character={character}/>
          })}
        </CharactersContainer>
      </Frame>
  );
}

export default SelectedCharacterOption

function getAllElementCharacters(element, allCharactersData){
  let charactersList = []
  if(element === 'Show all'){
    return allCharactersData
  } else{
    allCharactersData.forEach(character => {
      if(character.vision === element){
        charactersList.push(character)
      }
    })
    return charactersList
  }
}