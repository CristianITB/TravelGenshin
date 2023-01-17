import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { SingleElementDisplayer } from '../SingleElementDisplayer'

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
  const [data, setData] = useState(null);

  useEffect(() => {
      axios.get("https://api.genshin.dev/characters", {
          params: {
              param1: props.names
          }
      }).then(response => {
          setData(response.data);
      });
  }, [props]);

  return (
      <div>
          {data && (
              <SingleElementDisplayer {...data} />
          )}
      </div>
  );
}

export default SelectedCharacterOption
