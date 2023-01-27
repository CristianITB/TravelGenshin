import { Frame, Title, UnorderedList, LiElement } from './styles'

export const Header = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return (
    <Frame>
      <Title>TravelGenshin</Title>
      <nav>
        <UnorderedList>
          <LiElement onClick={handleClick}>Characters</LiElement>
          <LiElement onClick={handleClick}>Artifacts</LiElement>
          <LiElement onClick={handleClick}>Weapons</LiElement>
          <LiElement onClick={handleClick}>OSTs</LiElement>
          <LiElement onClick={handleClick}>Test</LiElement>
        </UnorderedList>
      </nav>
    </Frame>
  )
}

export default Header
