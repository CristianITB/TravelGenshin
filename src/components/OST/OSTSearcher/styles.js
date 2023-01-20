import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const InputBox = styled.input`
    width: 30rem;
    margin: auto;
    display: block;
    ${withTheme('padding', 'sizes.rem1')}
    border: 2px solid #000000;
`
export const SubmitButton = styled.button`
    margin: auto;
    ${withTheme('padding', 'sizes.rem1')}
    display: block;
    ${withTheme('margin-top', 'sizes.rem09')}
    border-radius: 20px;
    background-color: black;
    color: white;
`
