import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const SongDisplayer = styled.div`
    border: 2px solid #000000;
    width: 35rem;
    height: 10rem;
    margin-top: 1%;
    margin-left: 1%;
    background-color: ${props => 
        props.name === 'Genshin Impact - Forest of Jnana and Vidya (Original Game Soundtrack)' ? '#649c74' :
        props.name === 'Genshin Impact - City of Winds and Idylls (Original Game Soundtrack)' ? '#54a4b4' :
        props.name === 'Genshin Impact - Realm of Tranquil Eternity (Original Game Soundtrack)' ? '#9174a9' :
        props.name === 'Genshin Impact - Jade Moon Upon a Sea of Clouds (Original Game Soundtrack)' ? '#dca454' : '#EC4923'
    };
    display: inline-block;
`
export const TitleImageDiv = styled.div`
    display: flex;
`
export const PreviewSong = styled.p`
    font-weight: bold;
    font-size: 1.5em;
    margin: 1rem;
`
export const PreviewSongDisplayer = styled.div`
    display: flex;
`
export const SongName = styled.p`
    margin: 1rem;
`
export const SongArtist = styled.a`
    margin: 1rem;
`
export const SongImg = styled.img`
    height: 5rem;
    width: 5rem;
    margin: 0.5rem;
    margin-left: auto;
    border: 2px solid #000000;
`