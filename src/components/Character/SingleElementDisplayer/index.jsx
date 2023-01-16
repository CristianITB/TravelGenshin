import { Frame, UserInfo, UserImage, UserName, UserEmail } from './styles'
import React from 'react'

export const SingleElementDisplayer = (props) => {
  console.log(props)
  return (
    <>
      <p>hola</p>
      <p>{props[0]}</p>
    </>
  )
}

export default SingleElementDisplayer
