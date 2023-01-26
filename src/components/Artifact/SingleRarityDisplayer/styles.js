import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const ArtifactContainer = styled.div`
    border: 0.3vw solid #000000;
    width: 47vw;
    display: flex;
    ${withTheme('margin', 'sizes.vw07')}
    background-color: ${props =>
        props.max_rarity === 1
        ? '#85949c'
        : props.max_rarity === 2
        ? '#649c74'
        : props.max_rarity === 3
        ? '#54a4b4'
        : props.max_rarity === 4
        ? '#9174a9'
        : props.max_rarity === 5 ? '#dca454' : '#EC4923'
    };
`
export const ArtifactInfo = styled.div`
    ${withTheme('margin-left', 'sizes.vw01')};
`
export const ArtifactInfoTitle = styled.p`
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('margin-top', 'sizes.vw06')};
`
export const UnorderedListArtifacts = styled.ul`
    ${withTheme('margin-top', 'sizes.vw05')};
    ${withTheme('margin-left', 'sizes.vw2')};
    ${withTheme('margin-bottom', 'sizes.vw2')};
`
export const ArtifactInfoBonusTitle = styled.li`
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.vw1')};
    width: 30vw;
`
export const ArtifactInfoBonus = styled.p`
    ${withTheme('font-size', 'sizes.vw1')};
    width: 35vw;
`
export const ArtifactInfoImage = styled.img`
    height: 9.375vw;
    display: flex;
    ${withTheme('margin-top', 'sizes.vw09')};
`
