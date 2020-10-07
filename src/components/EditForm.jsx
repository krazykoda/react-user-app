import React, { Component } from 'react';
import { connect } from "react-redux";
import action  from "../store/action";
import { Redirect } from "react-router-dom"

class EditForm extends Component {
    state = this.props.user;
    

    handleChange = ({target}) => this.setState({ [target.name]: target.value })
    

    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.name || !this.state.email) return;
        let newUser = this.state;

        this.props.dispatch("addUser", newUser);

        this.setState({name: '', email: ''});
        this.props.history.push("/");
      }
    

    render() {
        if(!this.state) return <Redirect to="/" />
        return (
            <div className="App">
                <div className="form2">
                    <form >
                    <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    value={this.state.name} 
                    onChange={this.handleChange}
                    />

                    <br />

                    <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />

                    <br />

                    <input 
                    type="submit"
                    onClick={this.handleSubmit} 
                    value="Update"
                    />
                    </form>
                </div>
            </div>
        
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.userState.users.find(user => user.id === ownProps.match.params.id)
    }) 
}

const mapDispatchToProps = {
    dispatch: action
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
