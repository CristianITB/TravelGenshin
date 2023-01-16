import { Frame, Title, UnorderedList, LiElement } from '../../Header/styles'

export const CharactersOptions = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return(
    <Frame>
      <Title>Characters</Title>
      <nav>
        <UnorderedList>
          <LiElement onClick={handleClick}>Pyro</LiElement>
          <LiElement onClick={handleClick}>Anemo</LiElement>
          <LiElement onClick={handleClick}>Cryo</LiElement>
          <LiElement onClick={handleClick}>Geo</LiElement>
          <LiElement onClick={handleClick}>Electro</LiElement>
          <LiElement onClick={handleClick}>Hydro</LiElement>
          <LiElement onClick={handleClick}>Dendro</LiElement>
          <LiElement onClick={handleClick}>Show all</LiElement>
        </UnorderedList>
      </nav>
    </Frame>
  )
}

export default CharactersOptions