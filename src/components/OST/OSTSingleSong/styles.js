import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'
export const SongDisplayer = styled.div`
    border: 0.2vw solid #000000;
    width: 46vw;
    height: 15vw;
    ${withTheme('margin-left', 'sizes.vw2')};
    background-color: ${props =>
        props.name === 'Genshin Impact - Forest of Jnana and Vidya (Original Game Soundtrack)'
    ? '#649c74'
        : props.name === 'Genshin Impact - City of Winds and Idylls (Original Game Soundtrack)'
    ? '#54a4b4'
        : props.name === 'Genshin Impact - Realm of Tranquil Eternity (Original Game Soundtrack)'
    ? '#9174a9'
        : props.name === 'Genshin Impact - Jade Moon Upon a Sea of Clouds (Original Game Soundtrack)' ? '#dca454' : '#EC4923'
    };
    display: inline-block;
`
export const TitleImageDiv = styled.div`
    display: flex;
`
export const PreviewSong = styled.p`
    font-weight: bold;
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('margin', 'sizes.vw2')};
`
export const SongAudio = styled.audio`
    width: 28vw;
    height: 5vw;
`
export const PreviewSongDisplayer = styled.div`
    display: flex;
`
export const SongName = styled.p`
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('margin', 'sizes.vw1')};
`
export const SongArtist = styled.a`
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('margin', 'sizes.vw1')};

`
export const SongImg = styled.img`
    height: 5vw;
    width: 5vw;
    ${withTheme('margin', 'sizes.vw05')};
    margin-left: auto;
    border: 0.2vw solid #000000;
`
