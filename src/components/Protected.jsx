import React from 'react'
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom";

function Protected({ Component, auth, ...rest }) {
   if(!auth.isLoaded) return null

   if(auth.uid) {
       return <Route {...rest} render={props => <Component {...props} />} />
   }else return <Redirect to="/login" />
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Protected)
