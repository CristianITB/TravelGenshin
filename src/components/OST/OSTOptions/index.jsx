import { Frame, TitleComponent, AddCountry, UnorderedList } from './styles'

export const OSTOptions = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return(
    <Frame>
        <TitleComponent>OST's</TitleComponent>
        <UnorderedList>
          <AddCountry onClick={handleClick}>Mondstadt</AddCountry>
          <AddCountry onClick={handleClick}>Liyue</AddCountry>
          <AddCountry onClick={handleClick}>Inazuma</AddCountry>
          <AddCountry onClick={handleClick}>Sumeru</AddCountry>
        </UnorderedList>
        </Frame>
  )
}

export default OSTOptions