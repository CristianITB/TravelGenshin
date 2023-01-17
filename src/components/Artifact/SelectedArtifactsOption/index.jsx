import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { SingleElementDisplayer } from '../SingleElementDisplayer'

export const SelectedArtifactOption = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
      axios.get("https://api.genshin.dev/artifacts/adventurer", {
          params: {
              param1: props
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

export default SelectedArtifactOption
