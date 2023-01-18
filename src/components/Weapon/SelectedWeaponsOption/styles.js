import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const WeaponsDisplayer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 130rem;
    margin-left: 5rem;
`
export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0.5rem;
`

export const AddNewWeapon = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    ${withTheme('background-color', 'colors.oneStar')};
`
export const AddAllWeapons = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    ${withTheme('background-color', 'colors.showAll')};
`
