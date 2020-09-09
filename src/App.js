import React from "react";
import "./App.css";
import UserItem from './components/UserItem';
import UserForm from "./components/UserForm";
import { connect } from 'react-redux';
import action from './store/action';

class App extends React.Component {

  addUser = (newUser) => {
    this.props.dispatch('addUser', newUser)
  }

  delUser = (id) => {
    this.props.dispatch("deleteUser", id)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {/* Form to add new user */}
          <UserForm addUser={this.addUser} />

          {/* List of users */}
          <div className="users">
            <h1>List of users</h1>
            {this.props.users.map((itm) => <UserItem key={itm.id} id={itm.id} user={itm} delUser={this.delUser} />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    users: state.users
  })
}

const mapDispatchToProps = {
  dispatch: action
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
