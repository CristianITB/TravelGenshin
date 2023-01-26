import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.header`
    font-weight: bold;
    ${withTheme('margin', 'sizes.vw1')};
    border-bottom: 0.5vw solid black;
`
export const TitleComponent = styled.p`
    ${withTheme('font-size', 'sizes.vw25')};
    text-align: center;
`
export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${withTheme('padding', 'sizes.vw1')};
`
export const AddCountry = styled.button`
    border: 0.3vw solid #000000;
    ${withTheme('border-radius', 'sizes.vw1')};
    ${withTheme('padding', 'sizes.vw1')};
    font-weight: bold;
    ${withTheme('font-size', 'sizes.vw2')};
    cursor: pointer;
    ${withTheme('background-color', 'colors.oneStar')};
`
