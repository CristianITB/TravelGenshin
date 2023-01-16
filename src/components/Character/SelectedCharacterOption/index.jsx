// import { Frame, Title, UnorderedList, LiElement } from '../../Header/styles'
// import React, { useState, useEffect} from 'react'
// import axios from 'axios'
// import { SingleElementDisplayer } from '../SingleElementDisplayer'
import { useApiData } from '../../../helpers/axios.helper'

// export const SelectedCharacterOption = ({element}) => {
//   return(
//     <Frame>
//       <Title>{element} characters</Title>
//       <button onClick={() => console.log('clicked one')}>Add {element} character</button>
//       <button onClick={() => console.log('clicked two')}>Show all {element} characters</button>

//     </Frame>
//   )
// }


export const SelectedCharacterOption = (props) => {
  // const [data, setData] = useState(null);

  const charactersDataFromApi = useApiData()
  console.log(charactersDataFromApi[0])
  // const [charactersDataListState, setCharactersDataListState] = useState([])
  // const modifyCharactersList = () => {
  //   setCharactersDataListState([...charactersDataListState, charactersDataFromApi.results[2]])
  // }

  // useEffect(() => {
  //     axios.get("https://api.genshin.dev/characters", {
  //         params: {
  //             param1: props.names
  //         }
  //     }).then(response => {
  //         setData(response.data);
  //     });
  // }, [props]);

  return (
      <div>
        {/* <button onClick={modifyCharactersList}>Add {props.element} character</button>
        <button onClick={() => console.log('clicked two')}>Show all {props.element} characters</button>
          {data && (
              <SingleElementDisplayer {...data} />
          )} */}
      </div>
  );
}

export default SelectedCharacterOption
