import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.header`
    font-weight: bold;
    margin: 2rem;
    border-bottom: 5px solid black;
`

export const Title = styled.p`
    font-size: 2.5rem;
    text-align: center;
`

export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem;
    font-size: 1.3rem;
`

export const LiElement = styled.li`
    cursor: pointer;
`
