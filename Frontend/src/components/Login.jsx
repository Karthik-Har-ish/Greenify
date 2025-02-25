import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = (props) => {

    const loginSubmit = (formData) => {

        const username = formData.get("username");
        const password = formData.get("password");
        axios.post('http://localhost:3000/login', {userName:username, password:password})
        .then((res) => {
            console.log("Response: ", res);
            if(res.data.message === 'Login successful') {
                const token=res.data.token;
                const userId=res.data.userId;
                console.log("Login successful, token saved: ", token)
                localStorage.setItem("token",token)
                localStorage.setItem("userId",userId)
                
                window.location.href = '/home';
            } else {
                console.log(res.data.message)
                alert(res.data.message)
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
            <div className='padding-top'>
            Dont have an account? <Link className='sign-up-anchor' to="/signup">Sign up</Link>

            </div>
        </form>
    </div>
  )
}



export default Login