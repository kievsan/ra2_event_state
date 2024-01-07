import {useState} from 'react'

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from './data';

const CARDS = 'view_module';
const LIST = 'view_list'

const Store = () => {
  const [ icon, setIcon ] = useState(LIST);

  function onSwitch() {
    setIcon(icon === CARDS ? LIST : CARDS);
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {
        icon === CARDS && <ListView cards={products} />
      }
      {
        icon === LIST && <CardsView cards={products} />
      }
    </>
  )
}

export default Store