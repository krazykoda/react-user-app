import React, { Component } from 'react';
import { v4 as uuid } from "uuid";

export default class UserForm extends Component {
    state = {
        name: '', 
        email: ''
    }


    handleNameChange = (e) => this.setState({name: e.target.value})
    
    handleEmailChange = (e) => this.setState({email: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.name || !this.state.email) return
        let newUser = {
            id: uuid(),
            name: this.state.name, 
            email: this.state.email
        }

        this.props.addUser(newUser)

        this.setState({name: '', email: ''})
      }
    

    render() {
        return (
        <div className="form">
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
              />
            </form>
        </div>
        )
    }
}
