// import { Frame, Title, UnorderedList, LiElement } from '../../Header/styles'
// import { SingleElementDisplayer } from '../SingleElementDisplayer'
import { useState } from 'react'
import { useApiData } from '../../../helpers/axios.helper'
import SingleElementDisplayer from '../SingleElementDisplayer'

// export const SelectedCharacterOption = ({element}) => {
//   return(
//     <Frame>
//       <Title>{element} characters</Title>
//       <button onClick={() => console.log('clicked one')}>Add {element} character</button>
//       <button onClick={() => console.log('clicked two')}>Show all {element} characters</button>

//     </Frame>
//   )
// }


export const SelectedCharacterOption = ({element}) => {
  let allElementCharacters = []

  const {loading, post} = useApiData()
  if(loading){
    console.log(loading, 'cargando')
  } else {
      console.log(post[0])
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

  const showAlCharacters = () => {
    if(numberOfCharacters === 0){
    setCharactersDataListState(allElementCharacters)
    setNumberOfCharacters(allElementCharacters.length)
    } else{
      setNumberOfCharacters(0)
      setCharactersDataListState([])
    }
  }

  return (
      <div>
        <button onClick={addOneCharacter}>Add {element} character</button>
        <button onClick={showAlCharacters}>Show all {element} characters</button>
        <div>
          {charactersDataListState.map((character, index) => {
            return <SingleElementDisplayer key={index} character={character}/>
          })}
        </div>
      </div>
  );
}

export default SelectedCharacterOption


function getAllElementCharacters(element, allCharactersData){
  let charactersList = []
  allCharactersData.forEach(character => {
    if(character.vision === element){
      charactersList.push(character)
    }
  })
  return charactersList
}