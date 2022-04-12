import React, {useState} from 'react'
import Button from '../button/Button'
import './search-panel.css'

const SearchPanel = ({items, handleClick}) => {
  const [btnClass, setBtnClass] = useState(null);

  const onSelectItem = (index, child) => {
    setBtnClass(index);
    handleClick(child);
  }
    
  return (
    <div className="search-panel">
        <Button 
          type={btnClass === null ?'secondary' : 'primary'}
          onClick={() => onSelectItem(null)} 
          >Все</Button>
        {items && items.map((item, i) => {
          return <Button 
            key={item[i]} 
            type={btnClass === i ?'secondary': 'primary' } 
            onClick={() => onSelectItem(i, item)}
        >{item}</Button>
        })
      }
    </div>
  )
}

export default SearchPanel