import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const ArtifactsDisplayer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 130rem;
    margin-left: 5rem;
`
export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${withTheme('margin', 'sizes.rem09')};
`
export const AddNewArtifact = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    cursor: pointer;
    ${withTheme('padding', 'sizes.rem06')};
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.rem15')};
    ${withTheme('background-color', 'colors.oneStar')};
`
export const AddAllArtifacts = styled.button`
    border: 2px solid #000000;
    border-radius: 10px;
    cursor: pointer;
    ${withTheme('padding', 'sizes.rem06')};
    ${withTheme('font-weight', 'fontWeight.bold')};
    ${withTheme('font-size', 'sizes.rem15')};
    ${withTheme('background-color', 'colors.showAll')};
`
