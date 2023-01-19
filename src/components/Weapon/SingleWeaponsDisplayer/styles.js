import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const WeaponContainer = styled.div`
    border: 2px solid #000000;
    width: 50rem;
    margin-left: 1%;
    margin-top: 1%;
    background-color: ${props =>
        props.weaponRarity === 1
        ? '#85949c'
        : props.weaponRarity === 2
        ? '#649c74'
        : props.weaponRarity === 3
        ? '#54a4b4'
        : props.weaponRarity === 4
        ? '#9174a9'
        : props.weaponRarity === 5 ? '#dca454' : '#EC4923'
    };
    display: flex;
`
export const WeaponInfo = styled.div`
    ${withTheme('margin', 'sizes.rem09')};
`

export const WeaponInfoTitle = styled.p`
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.rem15')};
    ${withTheme('margin-top', 'sizes.rem06')};
`

export const UnorderedListWeapons = styled.ul`
    ${withTheme('margin-top', 'sizes.rem05')};
    ${withTheme('margin-left', 'sizes.rem15')};
`

export const WeaponInfoBonusTitle = styled.li`
    ${withTheme('font-weight', 'fontWeight.bold')};
    width: 30rem;
`

export const WeaponInfoBonus = styled.p`
    width: 35rem;
`

export const WeaponInfoImage = styled.img`
    height: 9.375rem;
    ${withTheme('margin-top', 'sizes.rem1')};
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
