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
          <LiElement onClick={handleClick} data-testid='charactersButton'>Characters</LiElement>
          <LiElement onClick={handleClick} data-testid='artifactsButton'>Artifacts</LiElement>
          <LiElement onClick={handleClick} data-testid='weaponsButton'>Weapons</LiElement>
          <LiElement onClick={handleClick} data-testid='ostsButton'>OSTs</LiElement>
        </UnorderedList>
      </nav>
    </Frame>
  )
}

export default Header
