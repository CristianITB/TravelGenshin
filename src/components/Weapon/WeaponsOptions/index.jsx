import { Frame, TitleComponent, AddWeapon } from '../WeaponsDisplayer/styles'

export const WeaponsOptions = (props) => {
  const handleClick = (event) => {
    props.onMenuClick(event.target.innerText)
  }
  return(
    <Frame>
        <TitleComponent>Weapons</TitleComponent>
        <AddWeapon onClick={handleClick}>Claymore</AddWeapon>
        <AddWeapon onClick={handleClick}>Sword</AddWeapon>
        <AddWeapon onClick={handleClick}>Catalyst</AddWeapon>
        <AddWeapon onClick={handleClick}>Bow</AddWeapon>
        <AddWeapon onClick={handleClick}>Polearm</AddWeapon>
    </Frame>
  )
}

export default WeaponsOptions