import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.header`
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('margin', 'sizes.vw1')}
    border-bottom: 0.5vw solid black;
`

export const Title = styled.p`
    text-align: center;
    ${withTheme('font-size', 'sizes.vw25')};
`

export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${withTheme('margin', 'sizes.vw2')}
    ${withTheme('font-size', 'sizes.vw2')};
`

export const LiElement = styled.li`
    cursor: pointer;
`
