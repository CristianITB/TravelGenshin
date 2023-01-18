import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const AddCharacterButton = styled.button`
  ${withTheme('padding', 'sizes.rem06')};
  background-color: ${props => 
    props.characterElement === 'Pyro' ? '#EC4923' : 
    props.characterElement === 'Hydro' ? '#00BFFF' : 
    props.characterElement === 'Cryo' ? '#4682B4' : 
    props.characterElement === 'Electro' ? '#945dc4' : 
    props.characterElement === 'Anemo' ? '#359697' : 
    props.characterElement === 'Geo' ? '#debd6c' : 
    props.characterElement === 'Dendro' ? '#608a00' : 'blue'};
  border: 2px solid black;
`

export const ShowAllCharactersButton = styled.button`
  ${withTheme('padding', 'sizes.rem06')};
  border: 2px solid black;
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
  ${withTheme('font-size', 'sizes.rem2')};
  text-align: center;
  ${withTheme('font-weight', 'fontWeight.bold')};
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${withTheme('margin-bottom', 'sizes.rem1')};
`