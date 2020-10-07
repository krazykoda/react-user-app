import React from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { emailLogin, googleSignin } from "../store/action"

function LoginForm({emailLogin, googleSignin, auth, history}) {

    if(!auth.isLoaded) return null
    if(auth.uid) history.push('/')
    const login = (e) => {
        e.preventDefault();
        const {email, password } = e.target

        emailLogin(email.value, password.value)
    }

    return (
        <div>
            <form onSubmit={login} className="form" >
                <h2>Login Form</h2>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" />
                </div>

                <button type="submit">Login</button><br/>
                <Link to="/register" >or Rsgister For an Account</Link>
                <hr/>
                <button onClick={ googleSignin } >Signin with google</button>
                
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

const mapDispatchToProps =  {
    emailLogin,
    googleSignin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
