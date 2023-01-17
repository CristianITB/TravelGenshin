import { Frame, TitleComponent, AddFourStar, AddFiveStar } from '../ArtifactsDisplayer/styles'

export const ArtifactsOptions = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return(
    <Frame>
        <TitleComponent>Artifacts</TitleComponent>
        <AddFourStar onClick={handleClick}>4⭐</AddFourStar>
        <AddFiveStar onClick={handleClick}>5⭐</AddFiveStar>
    </Frame>
  )
}

export default ArtifactsOptions