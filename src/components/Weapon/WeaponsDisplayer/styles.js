import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.header`
    font-weight: bold;
    margin: 2rem;
    border-bottom: 5px solid black;
`
export const WeaponsDisplayer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 100%;
    width: 150rem;
`
export const TitleComponent = styled.p`
    border: 1px;
    border-radius: 30px;
    resize: horizontal;
    font-size: 2em;
    text-align: center;
`

export const AddWeapon = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 20px 30px 20px 40px;
    margin-left: 8.5%;
    margin-top: 2%;
    margin-bottom: 1%;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    ${withTheme('background-color', 'colors.fourStar')};
`

export const AddNewWeapon = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 20px 30px 20px 40px;
    margin-left: 20%;
    margin-top: 2%;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    ${withTheme('background-color', 'colors.oneStar')};
`
export const AddAllWeapons = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 20px 30px 20px 40px;
    margin-left: 19.5%;
    margin-bottom: 2%;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    ${withTheme('background-color', 'colors.showAll')};
`

export const Weapon4Container = styled.div`
    border: 2px solid #000000;
    width: 800px;
    margin-left: 2%;
    margin-top: 1%;
    ${withTheme('background-color', 'colors.fourStar')}
    display: flex;
`

export const WeaponInfo = styled.div`
    margin-left: 2%;
`

export const WeaponInfoTitle = styled.p`
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 2%;
`
export const UnorderedListWeapons = styled.ul`
    margin-top: 1%;
    margin-left: 10%;
`
export const WeaponInfoBonusTitle = styled.li`
    font-weight: bold;
    width: 150px;
`
export const WeaponInfoBonus = styled.p`
    width: 550px;
`
export const WeaponInfoImage = styled.img`
    height: 150px;
    margin-top: 5%;
    display: flex;
`

export const Weapon5Container = styled.div`
    border: 2px solid #000000;
    width: 800px;
    margin-left: 2%;
    margin-top: 1%;;
    ${withTheme('background-color', 'colors.fiveStar')}
    display: flex;  
`