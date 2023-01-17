import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Artifact4Star = styled.p`
    ${withTheme('font-style', 'fontStyles.oblique')};
    ${withTheme('color', 'colors.fourStar')};
`
export const Frame = styled.header`
    font-weight: bold;
    margin: 2rem;
    border-bottom: 5px solid black;
    margin-top: 1%
`
export const ArtifactsDisplayer = styled.div`
    display: flex;
`
export const TitleComponent = styled.p`
    border: 1px;
    border-radius: 30px;
    resize: horizontal;
    padding: 28px 2px 0px 10px;
    margin-left: 45%;
    margin-top: 0%;
    font-size: 2em;
`

export const AddFourStar = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 20px 30px 20px 40px;
    margin-left: 32%;
    margin-top: 2%;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    ${withTheme('background-color', 'colors.fourStar')};
`
export const AddFiveStar = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 20px 30px 20px 40px;
    margin-left: 20%;
    margin-top: 2%;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    ${withTheme('background-color', 'colors.fiveStar')};
`

export const Artifact4Container = styled.div`
    border: 2px solid #000000;
    width: 600px;
    margin-left: 6.5%;
    margin-top: 0%;
    ${withTheme('background-color', 'colors.fourStar')}
    display: flex;
`

export const ArtifactInfo = styled.div`
    margin-left: 5%;
    margin-top: 0%;
`

export const ArtifactInfoTitle = styled.p`
    font-weight: bold;
    font-size: 1.5em;
`
export const UnorderedListArtifacts = styled.ul`
    margin-top: 3%;
    margin-left: 10%;
`
export const ArtifactInfoBonusTitle = styled.li`
    font-weight: bold;
    width: 400px;
`
export const ArtifactInfoBonus = styled.p`
    width: 350px;
`
export const ArtifactInfoImage = styled.img`
    height: 150px;
    margin-top: 5%;
    display: flex;
    content:url(https://api.genshin.dev/artifacts/berserker/flower-of-life);
`
export const ArtifactInfoImage5 = styled.img`
    height: 150px;
    margin-top: 5%;
    display: flex;
    content:url(https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life);
`

export const Artifact5Container = styled.div`
    border: 2px solid #000000;
    width: 600px;
    margin-left: 20%;
    margin-top: 0%;
    ${withTheme('background-color', 'colors.fiveStar')}
    display: flex;
`