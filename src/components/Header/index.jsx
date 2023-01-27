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
          <LiElement onClick={handleClick} data-testid='charactersMenuOption'>Characters</LiElement>
          <LiElement onClick={handleClick} data-testid='artifactsMenuOption'>Artifacts</LiElement>
          <LiElement onClick={handleClick} data-testid='weaponsMenuOption'>Weapons</LiElement>
          <LiElement onClick={handleClick} data-testid='ostsMenuOption'>OSTs</LiElement>
        </UnorderedList>
      </nav>
    </Frame>
  )
}

export default Header
