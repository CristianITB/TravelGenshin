import { useEffect, useRef, useState } from 'react'
import Spotify from 'spotify-web-api-js'
import OSTSingleSong from '../OSTSingleSong'
import { InputBox, SubmitButton } from './styles'
import { loginUrl } from '../spotify'

const spotify = new Spotify()

const OSTSearcher = ({ playlist }) => {
  const [authToken, setAuthToken] = useState(null)
  const input = useRef(null)
  const handleClick = () => {
    setAuthToken(input.current.value)
  }
  const [song, setSong] = useState([])
  useEffect(() => {
    if (authToken != null) {
      spotify.setAccessToken(authToken)
      spotify.searchTracks(playlist).then(response => {
        const tracks = response.tracks.items
        setSong(tracks)
      })
    }
  }, [playlist, authToken])
  const songSliced = song.slice(0, 6)
  return (
    authToken === null
      ? <div>
        <InputBox
          ref={input}
          type='text'
          placeholder='Put your token here'
          id='token'
          name='token'
        />
        <SubmitButton onClick={handleClick}>Click here to submit the Token!</SubmitButton>
        <div>
          <a href={loginUrl}>Sign in</a>
        </div>
        </div>
      : <div>
        {songSliced.map((song, index) => {
          return <OSTSingleSong key={index} allSongs={song} />
        })}
        </div>
  )
}

export default OSTSearcher
