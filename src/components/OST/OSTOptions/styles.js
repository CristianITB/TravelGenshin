import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.header`
    font-weight: bold;
    ${withTheme('margin', 'sizes.rem2')}
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
    ${withTheme('margin', 'sizes.rem05')}
`
export const AddCountry = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    ${withTheme('padding', 'sizes.rem06')}
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.rem15')};
    cursor: pointer;
    ${withTheme('background-color', 'colors.oneStar')};
`
