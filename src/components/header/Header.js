import React, { useState } from 'react'
import './_header.scss'
import Logo from '../../Images/yt-logo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineNotificationsNone, MdApps } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = ( {handleToggleSidebar} ) => {

  const [input,setInput] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${input}`)
  }

  const user = useSelector(state=>state.auth?.user)

  return (
    <div className='header border border-dark'>
      <FaBars className='header__menu' size={26} 
        onClick={()=>handleToggleSidebar()}
      />
      <img src={Logo} alt="Youtube_Logo" className="header__logo" />
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Search Here' 
        value={input} 
        onChange={e=>setInput(e.target.value)} />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdOutlineNotificationsNone  size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt="Avatar" />
      </div>
    </div>
  )
}

export default Header