import React from 'react'

const Login = () => {

    const loginSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
    }
  return (
    <div className='form-container'>
        <form className='login-form' action={loginSubmit}>
            <h1 className='form-title'>Login:</h1>
            <input className='username' type="text" name="username" placeholder="Username" required />
            <input className='password' type="password" name="password" placeholder="Password" required />
            <button className='login-btn' type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login