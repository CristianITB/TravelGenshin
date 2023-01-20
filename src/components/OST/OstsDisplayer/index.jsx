import { useState } from 'react'
import OSTOptions from '../OSTOptions'
import OSTSearcher from '../OSTSearcher'

export const OSTDataDisplayer = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('')
  let componentToRender

  const handleMenuClick = (menuOption) => {
    setSelectedMenuOption(menuOption)
  }

  switch (selectedMenuOption) {
    case 'Mondstadt':
      componentToRender = <OSTSearcher playlist='Yu-Peng Chen City of Winds and Idylls' />
      break
    case 'Liyue':
      componentToRender = <OSTSearcher playlist='Yu-Peng Chen Jade Moon Upon a Sea of Clouds' />
      break
    case 'Inazuma':
      componentToRender = <OSTSearcher playlist='Yu-Peng Chen Realm of Tranquil Eternity' />
      break
    case 'Sumeru':
      componentToRender = <OSTSearcher playlist='HOYO-MIX Forest of Jnana and Vidya' />
      break
    default:
      componentToRender = null
  }

  return (
    <div>
      <OSTOptions onMenuClick={handleMenuClick} />
      {componentToRender}
    </div>
  )
}

export default OSTDataDisplayer
