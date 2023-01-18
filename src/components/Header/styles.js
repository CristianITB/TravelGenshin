import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.header`
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('margin', 'sizes.rem1')}
    border-bottom: 5px solid black;
`

export const Title = styled.p`
    text-align: center;
    ${withTheme('font-size', 'sizes.rem25')};
`

export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${withTheme('margin', 'sizes.rem2')}
    ${withTheme('font-size', 'sizes.rem13')};
`

export const LiElement = styled.li`
    cursor: pointer;
`
