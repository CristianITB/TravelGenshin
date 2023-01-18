import styled from '@emotion/styled'

export const ArtifactContainer = styled.div`
    border: 2px solid #000000;
    width: 50rem;
    margin-top: 1%;
    margin-left: 1%;
    background-color: ${props => 
        props.max_rarity === 1 ? '#85949c' :
        props.max_rarity === 2 ? '#649c74' :
        props.max_rarity === 3 ? '#54a4b4' :
        props.max_rarity === 4 ? '#9174a9' :
        props.max_rarity === 5 ? '#dca454' : '#EC4923'
    };
    display: flex;
`
export const ArtifactInfo = styled.div`
    margin-left: 2%;
`
export const ArtifactInfoTitle = styled.p`
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 1%;
`
export const UnorderedListArtifacts = styled.ul`
    margin-top: 1%;
    margin-left: 10%;
`
export const ArtifactInfoBonusTitle = styled.li`
    font-weight: bold;
    width: 30rem;
`
export const ArtifactInfoBonus = styled.p`
    width: 35rem;
`
export const ArtifactInfoImage = styled.img`
    height: 150px;
    margin-top: 5%;
    display: flex;
`
