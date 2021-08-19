import React from 'react'
import { Link } from 'react-router-dom'
const Register = ({click}) => {
    return (
        <div className='form'>
        <form>
            <input type='text' placeholder='Email'/>
            <input type='password' placeholder='Mật khẩu'/>
            <input type='password' placeholder='Tên'/>
            <button type='submit'>Đăng kí</button>
            <p>Bạn đã có tài khoản ? <Link to='#' onClick={()=>click()}>Đăng nhập</Link></p>
        </form>
    </div>
    )
}

export default Register
