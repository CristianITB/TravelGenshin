import { Frame, Title, UnorderedList, LiElement } from '../../Header/styles'

export const WeaponsOptions = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return(
    <Frame>
      <Title>Weapons</Title>
      <nav>
        <UnorderedList>
          <LiElement onClick={handleClick}>4</LiElement>
          <LiElement onClick={handleClick}>5</LiElement>
          <LiElement onClick={handleClick}>Show all</LiElement>
        </UnorderedList>
      </nav>
    </Frame>
  )
}

export default WeaponsOptions