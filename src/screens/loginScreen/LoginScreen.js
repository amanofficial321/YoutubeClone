import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../Images/yt-logo.png'
import './_loginScreen.scss';
import { login } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

  const dispatch = useDispatch();

  const accessToken = useSelector(state=>state.auth.accessToken)

  const handleLogin =()=>{
    dispatch(login())
  }

  const history = useNavigate()

  useEffect( ()=>{
    if(accessToken){
      history('/')
    }
  }, [ accessToken, history ] )

  return (
    <div className='login'>
        <div className="login__container">
            <img src={Logo} alt="" />
            <button onClick={handleLogin} >Login with Google</button>
            <p>Welcome to Aman's Youtube Clone</p>
        </div>
    </div>
  )
}

export default LoginScreen