import { Frame, TitleComponent, AddWeapon, UnorderedList } from './styles'

export const WeaponsOptions = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return (
    <Frame>
      <TitleComponent>Weapons</TitleComponent>
      <UnorderedList>
        <AddWeapon onClick={handleClick}>Claymore</AddWeapon>
        <AddWeapon onClick={handleClick}>Sword</AddWeapon>
        <AddWeapon onClick={handleClick}>Catalyst</AddWeapon>
        <AddWeapon onClick={handleClick}>Bow</AddWeapon>
        <AddWeapon onClick={handleClick}>Polearm</AddWeapon>
      </UnorderedList>
    </Frame>
  )
}

export default WeaponsOptions
