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
    props.weaponRarity === 4 ? '#EC4923' : 
    props.weaponRarity === 5 ? '#608a00' : 'blue'}
`

export const WeaponInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${withTheme('padding', 'sizes.rem0625')}
  ${withTheme('margin-left', 'sizes.rem1')}
`

export const WeaponImage = styled.img`
  ${withTheme('width', 'sizes.rem6')}
  ${withTheme('height', 'sizes.rem6')}
`

export const WeaponName = styled.p`
  font-weight: bold;
  ${withTheme('margin', 'sizes.rem0625')}
`

export const WeaponSubStat = styled.p`
  ${withTheme('margin', 'sizes.rem0')}
`

export const WeaponPassive = styled.p`
  ${withTheme('margin', 'sizes.rem0')}
`
