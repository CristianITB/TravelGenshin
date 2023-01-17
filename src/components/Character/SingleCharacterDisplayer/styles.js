import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  ${withTheme('margin', 'sizes.rem07')};
  ${withTheme('margin-left', 'sizes.rem15')};
  border: 2px solid black;
  width: 21.875rem;
  ${withTheme('padding', 'sizes.rem05')};
  background-color: ${props => 
    props.characterElement === 'Pyro' ? '#EC4923' : 
    props.characterElement === 'Hydro' ? '#00BFFF' : 
    props.characterElement === 'Cryo' ? '#359697' : 
    props.characterElement === 'Electro' ? '#945dc4' : 
    props.characterElement === 'Anemo' ? '#359697' : 
    props.characterElement === 'Geo' ? '#debd6c' : 
    props.characterElement === 'Dendro' ? '#608a00' : 'blue'}
`

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${withTheme('padding', 'sizes.rem0625')}
  ${withTheme('margin-left', 'sizes.rem1')}
`

export const CharacterImage = styled.img`
  ${withTheme('width', 'sizes.rem6')}
  ${withTheme('height', 'sizes.rem6')}
`

export const CharacterName = styled.p`
  font-weight: bold;
  ${withTheme('margin', 'sizes.rem0625')}
`

export const CharacterWeapon = styled.p`
  ${withTheme('margin', 'sizes.rem0')}
`

export const CharacterNation = styled.p`
  ${withTheme('margin', 'sizes.rem0')}
`

export const CharacterConstellation = styled.p`
  ${withTheme('margin', 'sizes.rem0')}
`