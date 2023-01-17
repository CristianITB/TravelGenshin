import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.div`
  border: 2px solid #000000;
  display: flex;
  flex-direction: row;
  ${withTheme('margin', 'sizes.rem07')};
  ${withTheme('margin-left', 'sizes.rem15')};
  border: 2px solid black;
  width: 28rem;
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

export const CharacterImage = styled.img`
  ${withTheme('width', 'sizes.rem6')}
  ${withTheme('height', 'sizes.rem6')}
  margin-top: 4%;
`

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${withTheme('padding', 'sizes.rem0625')}
  ${withTheme('margin-left', 'sizes.rem1')}
`

export const CharacterInfoTitle = styled.p`
  font-weight: bold;
  font-size: 1.3em;
  margin-top: 2%;
`

export const ListOfData = styled.ul`
    margin: 3%;
    width: 300px;
`

export const CharacterWeapon = styled.li`
  font-size: 0.8em;
  margin: 2%;
`

export const CharacterNation = styled.li`
  font-size: 0.8em;
  margin: 2%;
`

export const CharacterConstellation = styled.li`
  font-size: 0.8em;
  margin: 2%;
`