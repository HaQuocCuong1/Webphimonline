import React from 'react'
import { Link } from 'react-router-dom'
const Login = ({click}) => {
    return (
        <div className='form'>
        <form>
            <input type='text' placeholder='Email'/>
            <input type='password' placeholder='Mật khẩu'/>
            <button type='submit'>Đăng nhập</button>
            <p>Bạn chưa có tài khoản ?<Link to='#' onClick={()=>click()}>Đăng kí</Link></p>
        </form>
    </div>
    )
}

export default Login
