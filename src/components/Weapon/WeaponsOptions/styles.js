import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.header`
    font-weight: bold;
    margin: 2rem;
    border-bottom: 5px solid black;
`
export const TitleComponent = styled.p`
    ${withTheme('font-size', 'sizes.rem2')};
    text-align: center;
`
export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${withTheme('margin', 'sizes.rem06')};
`
export const AddWeapon = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    cursor: pointer;
    ${withTheme('padding', 'sizes.rem06')};
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.rem15')};
    ${withTheme('background-color', 'colors.fourStar')};
`
