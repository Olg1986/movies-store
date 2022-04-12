import React, {useRef} from 'react'
import './search-input.css'

const SearchInput = ({onClick}) => {
  const formEl = useRef(null)

  const onSubmit = () => {
    console.log('reset')
    formEl.value = ''
  }
  
  return (
    <form onSubmit={onSubmit} className="search">
        <div className="search-box">
            <i className="bx bx-search-alt"></i>
            <input ref={formEl} onChange={(e) => onClick(e.target.value)} type="text" placeholder='I`m searching for...'/>
        </div>
        <i className="bx bx-customize"></i>
    </form>
    
  )
}

export default SearchInput