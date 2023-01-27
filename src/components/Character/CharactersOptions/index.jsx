import { Frame, Title, UnorderedList, LiElement } from '../../Header/styles'

export const CharactersOptions = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return (
    <Frame>
      <Title>Characters</Title>
      <nav>
        <UnorderedList>
          <LiElement onClick={handleClick} data-testid='pyroMenuOption'>Pyro</LiElement>
          <LiElement onClick={handleClick} data-testid='anemoMenuOption'>Anemo</LiElement>
          <LiElement onClick={handleClick} data-testid='cryoMenuOption'>Cryo</LiElement>
          <LiElement onClick={handleClick} data-testid='geoMenuOption'>Geo</LiElement>
          <LiElement onClick={handleClick} data-testid='electroMenuOption'>Electro</LiElement>
          <LiElement onClick={handleClick} data-testid='hydroMenuOption'>Hydro</LiElement>
          <LiElement onClick={handleClick} data-testid='dendroMenuOption'>Dendro</LiElement>
          <LiElement onClick={handleClick} data-testid='showAllCharactersMenuOption'>Show all</LiElement>
        </UnorderedList>
      </nav>
    </Frame>
  )
}

export default CharactersOptions
