import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const SongDisplayer = styled.div`
    ${withTheme('padding', 'sizes.rem1')}
    border: 2px solid #000000;
    width: 35rem;
    height: 10rem;
    ${withTheme('margin-top', 'sizes.rem09')}
    ${withTheme('margin-left', 'sizes.rem13')}
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
    ${withTheme('font-size', 'sizes.rem15')};
    ${withTheme('margin', 'sizes.rem1')}
`
export const PreviewSongDisplayer = styled.div`
    display: flex;
`
export const SongName = styled.p`
    ${withTheme('margin', 'sizes.rem1')}
`
export const SongArtist = styled.a`
    ${withTheme('margin', 'sizes.rem1')}
`
export const SongImg = styled.img`
    height: 5rem;
    width: 5rem;
    ${withTheme('margin', 'sizes.rem05')}
    margin-left: auto;
    border: 2px solid #000000;
`
