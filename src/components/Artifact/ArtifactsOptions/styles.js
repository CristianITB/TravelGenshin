import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.header`
    ${withTheme('font-weight', 'fontWeight.bold')};
    border-bottom: 0.5vw solid black;
`
export const TitleComponent = styled.p` 
    ${withTheme('font-size', 'sizes.vw2')};
    text-align: center;
`
export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${withTheme('margin', 'sizes.vw09')};
`
export const AddThreeStar = styled.button`
    border: 0.3vw solid #000000;
    ${withTheme('border-radius', 'sizes.vw1')};
    cursor: pointer;
    ${withTheme('padding', 'sizes.vw06')};
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('background-color', 'colors.threeStar')};
`
export const AddFourStar = styled.button`
    border: 0.3vw solid #000000;
    ${withTheme('border-radius', 'sizes.vw1')};
    cursor: pointer;
    ${withTheme('padding', 'sizes.vw06')};
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('background-color', 'colors.fourStar')};
`
export const AddFiveStar = styled.button`
    border: 0.3vw solid #000000;
    ${withTheme('border-radius', 'sizes.vw1')};
    cursor: pointer;
    ${withTheme('padding', 'sizes.vw06')};
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('background-color', 'colors.fiveStar')};
`
