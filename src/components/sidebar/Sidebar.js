import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

const menu = [
  'Promo',
  'Films'
]
const Sidebar = ({isSidebarShow, onClick}) => {
  return (
    <div className="menu" style={{width: isSidebarShow ? '30%' : '15%'}}>
     <ul className={isSidebarShow ? "show" : ""}>
      {
          menu.map(title => (
            <Link to="/" key={title} className="menu-item">{title}</Link>
          ))
      }
     </ul>
     <button className="menu-btn" onClick={onClick}>
        <i className={`bx bx-${isSidebarShow ? 'x' : 'border-left'}`}/>
      </button>
    </div>
  )
}

export default Sidebar