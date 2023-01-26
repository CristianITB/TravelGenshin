import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const Frame = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  ${withTheme('margin', 'sizes.vw07')};
  ${withTheme('margin-left', 'sizes.vw15')};
  ${withTheme('padding', 'sizes.vw05')};
  width: 28vw;
  background-color: ${props =>
    props.characterElement === 'Pyro'
    ? '#EC4923'
    : props.characterElement === 'Hydro'
    ? '#00BFFF'
    : props.characterElement === 'Cryo'
    ? '#4682B4'
    : props.characterElement === 'Electro'
    ? '#945dc4'
    : props.characterElement === 'Anemo'
    ? '#359697'
    : props.characterElement === 'Geo'
    ? '#debd6c'
    : props.characterElement === 'Dendro' ? '#608a00' : 'blue'}
`

export const CharacterImage = styled.img`
  ${withTheme('width', 'sizes.vw6')}
  ${withTheme('height', 'sizes.vw6')}
  ${withTheme('margin-top', 'sizes.vw1')};
`

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${withTheme('padding', 'sizes.vw0625')}
  ${withTheme('margin-left', 'sizes.vw1')}
`

export const CharacterInfoTitle = styled.p`
  ${withTheme('font-weight', 'fontWeight.bold')};
  ${withTheme('font-size', 'sizes.vw13')};
  ${withTheme('margin-top', 'sizes.vw03')}
`

export const ListOfData = styled.ul`
  width: 18.75vw;
  ${withTheme('margin', 'sizes.vw04')}
`

export const CharacterWeapon = styled.li`
  ${withTheme('font-size', 'sizes.vw08')};
  ${withTheme('margin', 'sizes.vw04')}
`

export const CharacterNation = styled.li`
  ${withTheme('font-size', 'sizes.vw08')};
  ${withTheme('margin', 'sizes.vw04')}
`

export const CharacterConstellation = styled.li`
  ${withTheme('font-size', 'sizes.vw08')};
  ${withTheme('margin', 'sizes.vw04')}
`
