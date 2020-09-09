import React, { Component } from 'react';
import { connect } from "react-redux";
import action  from "../store/action"

class EditForm extends Component {
    state = {
        name: this.props.user? this.props.user.name : "", 
        email: this.props.user? this.props.user.email : ""
    }


    handleNameChange = (e) => this.setState({name: e.target.value})
    
    handleEmailChange = (e) => this.setState({email: e.target.value})

    editUser = (data) => {
        this.props.dispatch("editUser", data)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.name || !this.state.email) return
        let newUser = {
            id: this.props.match.params.id,
            name: this.state.name, 
            email: this.state.email
        }

        this.editUser(newUser)

        this.setState({name: '', email: ''})
        this.props.history.push("/")
      }
    

    render() {
        return (
            <div className="App">
                <div className="form2">
                    <form >
                    <input 
                    type="text" 
                    placeholder="Name"
                    value={this.state.name} 
                    onChange={this.handleNameChange}
                    />

                    <br />

                    <input 
                    type="email" 
                    placeholder="Email" 
                    value={this.state.email}
                    onChange={this.handleEmailChange}
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
        user: state.users.find(user => user.id === ownProps.match.params.id)
    }) 
}

const mapDispatchToProps = {
    dispatch: action
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
