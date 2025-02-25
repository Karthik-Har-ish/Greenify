import { Link } from "react-router-dom"
import axios from "axios"

export default function Signup(){


    function signUpSubmit(formData){
        if( formData.get("password")!=formData.get("confirm-password")){
            alert('Passwords dont match!')
            return
        }
        const user = {
            userName:formData.get("username"),
            password:formData.get("password"),
            email:formData.get("email"),
            phoneNumber:formData.get("Ph-no")
        }

        axios.post("http://localhost:3000/signup",user)
            .then(res=>{
                console.log(res.data.message)
                window.location.href = "/" 
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return(


        <>
        <form className='login-form' action={signUpSubmit}>
            <h1 className='form-title'>Sign up:</h1>
            <input className='username' type="text" name="username" placeholder="Username" required />
            <input className='password' type="password" name="password" placeholder="Password" required />
            <input className='confirm-password' type="password" name="confirm-password" placeholder="Confirm Password" required />
            <input className='Ph-no' type="text" name="Ph-no" placeholder="Phone Number" required />
            <input className='email' type="mail" name="email" placeholder="email" required />
            <button className='login-btn' type="submit">Sign up!</button>
            <div className="padding-top">
            Already have an account? <Link className="sign-up-anchor" to="/">Log in</Link>

            </div>
        </form>
        </>
    )
}