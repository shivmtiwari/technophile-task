import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user = {
        email,
        password
    }
    console.log(user)
    return (
        <div className='loginWrapper'>
            <div className="loginContainer">
                <h3>Hello Again!</h3>
                <p>Welcome back you've been missed!</p>
                <form>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                    <button className='LoginBtn'>Login</button>
                </form>
                <span>Don't have an account ? Sign Up</span>
            </div>
        </div>
    )
}

export default Login