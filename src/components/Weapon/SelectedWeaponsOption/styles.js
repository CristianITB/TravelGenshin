import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const WeaponsDisplayer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100vw;
`
export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${withTheme('margin', 'sizes.vw09')};
`
export const AddNewWeapon = styled.button`
    border: 0.3vw solid #000000;
    ${withTheme('border-radius', 'sizes.vw1')};
    cursor: pointer;
    ${withTheme('padding', 'sizes.vw06')};
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('background-color', 'colors.oneStar')};
`
export const AddAllWeapons = styled.button`
    border: 0.3vw solid #000000;
    ${withTheme('border-radius', 'sizes.vw1')};
    cursor: pointer;
    ${withTheme('padding', 'sizes.vw06')};
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('background-color', 'colors.showAll')};
`
