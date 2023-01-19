import { useEffect, useState } from 'react'
import Spotify from 'spotify-web-api-js'
import OSTSingleSong from '../OSTSingleSong'

const spotify = new Spotify()

const OSTSearcher = ({playlist}) => {
    const [song, setSong] = useState([])
    useEffect(() => {
        spotify.setAccessToken('BQDVL_H-T_wFL0ZUmZEf1vvqbirvaAat1ix8E2fXbJs1gfetyX2SekLsYzvP1pVyNr2h7Yt1erRF2sgEPfMb6ICEzInG6VurzTgAxRYtEU_eFChYtSuLzjZFvv6b9pbFpn-xzcg0WrV74Ck3iAdvvPFb-zSlfOzEWSO67sZnfJwjlF1rhe7WgVyzmNQwAyLcGMGVYQvlYrqmHUzPh5omNLY')
        spotify.searchTracks(playlist).then(response => {
        const tracks = response.tracks.items
        setSong(tracks)
        })
    }, [playlist])
    const songSliced = song.slice(0, 6)
    return (
        <div>
            <div>
                {songSliced.map((song, index) => {
                    return <OSTSingleSong key={index} allSongs={song}/>
                })}
            </div>
        </div>
    )
}

export default OSTSearcher


