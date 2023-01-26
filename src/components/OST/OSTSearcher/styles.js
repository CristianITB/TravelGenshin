import styled from '@emotion/styled'
import { withTheme } from '../../../helpers/styles.helper'

export const InputBox = styled.input`
    width: 40vw;
    ${withTheme('font-size', 'sizes.vw15')};
    ${withTheme('padding', 'sizes.vw1')};
    margin: auto;
    display: block;
    border: 0.3vw solid #000000;
`
export const SubmitButton = styled.button`
    width: 20vw;
    margin: auto;
    display: block;
    ${withTheme('font-size', 'sizes.vw1')};
    ${withTheme('padding', 'sizes.vw05')};
    ${withTheme('margin-top', 'sizes.vw1')};
    ${withTheme('border-radius', 'sizes.vw05')};
    background-color: black;
    color: white;
`
