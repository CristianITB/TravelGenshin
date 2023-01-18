import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  ${withTheme('margin', 'sizes.rem07')};
  ${withTheme('margin-left', 'sizes.rem15')};
  ${withTheme('padding', 'sizes.rem05')};
  width: 28rem;
  background-color: ${props => 
    props.characterElement === 'Pyro' ? '#EC4923' : 
    props.characterElement === 'Hydro' ? '#00BFFF' : 
    props.characterElement === 'Cryo' ? '#4682B4' : 
    props.characterElement === 'Electro' ? '#945dc4' : 
    props.characterElement === 'Anemo' ? '#359697' : 
    props.characterElement === 'Geo' ? '#debd6c' : 
    props.characterElement === 'Dendro' ? '#608a00' : 'blue'}
`

export const CharacterImage = styled.img`
  ${withTheme('width', 'sizes.rem6')}
  ${withTheme('height', 'sizes.rem6')}
  ${withTheme('margin-top', 'sizes.rem1')};
`

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${withTheme('padding', 'sizes.rem0625')}
  ${withTheme('margin-left', 'sizes.rem1')}
`

export const CharacterInfoTitle = styled.p`
  ${withTheme('font-weight', 'fontWeight.bold')};
  ${withTheme('font-size', 'sizes.rem13')};
  ${withTheme('margin-top', 'sizes.rem03')}
`

export const ListOfData = styled.ul`
  ${withTheme('margin', 'sizes.rem04')}
  width: 18.75rem;
`

export const CharacterWeapon = styled.li`
  ${withTheme('font-size', 'sizes.rem08')};
  ${withTheme('margin', 'sizes.rem04')}
`

export const CharacterNation = styled.li`
  ${withTheme('font-size', 'sizes.rem08')};
  ${withTheme('margin', 'sizes.rem04')}
`

export const CharacterConstellation = styled.li`
  ${withTheme('font-size', 'sizes.rem08')};
  ${withTheme('margin', 'sizes.rem04')}
`