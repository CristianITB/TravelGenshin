import { Frame, UserInfo, UserImage, UserName, UserEmail } from './styles'
import React from 'react'

export const SingleElementDisplayer = ({character}) => {
  console.log(character)
  return (
    <>
      <p>hola {character.name}</p>
    </>
  )
}

export default SingleElementDisplayer
