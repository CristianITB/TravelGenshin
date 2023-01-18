import { Frame, TitleComponent,AddThreeStar, AddFourStar, AddFiveStar, UnorderedList } from './styles'

export const ArtifactsOptions = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return(
    <Frame>
        <TitleComponent>Artifacts</TitleComponent>
        <UnorderedList>
          <AddThreeStar onClick={handleClick}>3⭐</AddThreeStar>
          <AddFourStar onClick={handleClick}>4⭐</AddFourStar>
          <AddFiveStar onClick={handleClick}>5⭐</AddFiveStar>
        </UnorderedList>
    </Frame>
  )
}

export default ArtifactsOptions