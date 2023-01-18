import styled from '@emotion/styled'

export const WeaponContainer = styled.div`
    border: 2px solid #000000;
    width: 50rem;
    margin-left: 1%;
    margin-top: 1%;
    background-color: ${props => 
        props.weaponRarity === 1 ? '#85949c' :
        props.weaponRarity === 2 ? '#649c74' :
        props.weaponRarity === 3 ? '#54a4b4' :
        props.weaponRarity === 4 ? '#9174a9' :
        props.weaponRarity === 5 ? '#dca454' : '#EC4923'
    };
    display: flex;
`
export const WeaponInfo = styled.div`
    margin-left: 2%;
`

export const WeaponInfoTitle = styled.p`
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 1%;
`
export const UnorderedListWeapons = styled.ul`
    margin-top: 1%;
    margin-left: 10%;
`
export const WeaponInfoBonusTitle = styled.li`
    font-weight: bold;
    width: 30rem;
`
export const WeaponInfoBonus = styled.p`
    width: 35rem;
`
export const WeaponInfoImage = styled.img`
    height: 150px;
    margin-top: 5%;
`
export const WeaponAtkStat = styled.p`
    width: 10rem;
`

export const WeaponSubStat = styled.p`
    width: 10rem;
`
export const WeaponStatsDiv = styled.div`
    float: right;
    margin-top: -8%;
`

