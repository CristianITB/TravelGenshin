import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const AddWeaponButton = styled.button`
  padding: 0.5rem;
  background-color: ${props => 
    props.weaponRarity === 4 ? '#EC4923' : 
    props.weaponRarity === 5 ? '#608a00' : 'blue'}
`

export const ShowAllWeaponsButton = styled.button`
  padding: 0.5rem;
  ${withTheme('background-color', 'colors.showAll')};
`

export const Frame = styled.div`
  
`

export const WeaponsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100rem;
  flex-wrap: wrap;
  width: 60rem;
`

export const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1rem;
`