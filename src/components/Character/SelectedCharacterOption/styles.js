import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const AddCharacterButton = styled.button`
  padding: 0.5rem;
  background-color: ${props => 
    props.characterElement === 'Pyro' ? '#EC4923' : 
    props.characterElement === 'Hydro' ? '#00BFFF' : 
    props.characterElement === 'Cryo' ? '#359697' : 
    props.characterElement === 'Electro' ? '#945dc4' : 
    props.characterElement === 'Anemo' ? '#359697' : 
    props.characterElement === 'Geo' ? '#debd6c' : 
    props.characterElement === 'Dendro' ? '#608a00' : 'blue'}
`

export const ShowAllCharactersButton = styled.button`
  padding: 0.5rem;
  ${withTheme('background-color', 'colors.showAll')};
`

export const Frame = styled.div`
  
`

export const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100rem;
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