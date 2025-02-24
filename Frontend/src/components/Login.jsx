import React from 'react'
import axios from 'axios'

const Login = (props) => {

    const loginSubmit = (formData) => {

        const username = formData.get("username");
        const password = formData.get("password");
        axios.post('http://localhost:3000/login', {userName:username, password:password})
        .then((res) => {
            console.log("Response: ", res);
            if(res.data.message === 'Login successful') {
                window.location.href = '/home';
            } else {
                console.log(res.data.message)
            }
        })
        .catch((err) => {
            console.log(err);
        });
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