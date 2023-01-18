import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const ArtifactContainer = styled.div`
    border: 2px solid #000000;
    width: 50rem;
    display: flex;
    ${withTheme('margin-top', 'sizes.rem03')};
    ${withTheme('margin-left', 'sizes.rem03')};
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
    ${withTheme('margin-left', 'sizes.rem01')};
`
export const ArtifactInfoTitle = styled.p`
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.rem15')};
    ${withTheme('margin-top', 'sizes.rem1')};
`
export const UnorderedListArtifacts = styled.ul`
    ${withTheme('margin-top', 'sizes.rem05')};
    ${withTheme('margin-left', 'sizes.rem2')};
`
export const ArtifactInfoBonusTitle = styled.li`
    ${withTheme('font-weight', 'fontWeight.bold')};
    width: 30rem;
`
export const ArtifactInfoBonus = styled.p`
    width: 35rem;
`
export const ArtifactInfoImage = styled.img`
    height: 9.375rem;
    display: flex;
    ${withTheme('margin-top', 'sizes.rem09')};
`
