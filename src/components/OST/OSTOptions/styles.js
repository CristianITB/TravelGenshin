import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.header`
    font-weight: bold;
    margin: 2rem;
    border-bottom: 5px solid black;
`
export const TitleComponent = styled.p`
    font-size: 2em;
    text-align: center;
`
export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0.5rem;
`
export const AddCountry = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    ${withTheme('background-color', 'colors.oneStar')};
`
