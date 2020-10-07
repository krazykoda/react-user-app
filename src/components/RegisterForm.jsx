import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { emailRegistration } from "../store/action"

function RegisterForm({emailRegistration, auth, history}) {
    if(!auth.isLoaded) return null
    if(auth.uid) history.push('/')
    const register = (e) => {
        e.preventDefault();
        console.log(e.target.email.value)
        const {email, password } = e.target

        emailRegistration(email.value, password.value)
    }

    return (
        <div>
            <form onSubmit={register} className="form" >
                <h2>Register Form</h2>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" />
                </div>

                <button type="submit">Submit</button>
                <Link to="/login">Login</Link>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

const mapDispatchToProps =  {
    emailRegistration
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
