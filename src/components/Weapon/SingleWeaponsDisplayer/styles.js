import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const WeaponContainer = styled.div`
    border: 0.3vw solid #000000;
    width: 47vw;
    display: flex;
    ${withTheme('margin', 'sizes.vw07')}
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
`
export const WeaponInfo = styled.div`
    ${withTheme('margin-left', 'sizes.vw01')};
`
export const WeaponInfoTitle = styled.p`
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('margin-top', 'sizes.vw06')};
`
export const UnorderedListWeapons = styled.ul`
    ${withTheme('margin-top', 'sizes.vw05')};
    ${withTheme('margin-left', 'sizes.vw2')};
    ${withTheme('margin-bottom', 'sizes.vw2')};
`
export const WeaponInfoBonusTitle = styled.li`
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw1')};
    width: 30vw;
`
export const WeaponInfoBonus = styled.p`
    ${withTheme('font-size', 'sizes.vw1')};
    width: 35vw;
`
export const WeaponInfoImage = styled.img`
    height: 9.375vw;
    display: flex;
    ${withTheme('margin-top', 'sizes.vw1')};
`

export const WeaponAtkStat = styled.p`
    ${withTheme('font-size', 'sizes.vw1')};
    width: 15vw;
`

export const WeaponSubStat = styled.p`
    ${withTheme('font-size', 'sizes.vw1')};
    width: 15vw;
`

export const WeaponStatsDiv = styled.div`
    float: right;
    margin-top: -2vw;
`
