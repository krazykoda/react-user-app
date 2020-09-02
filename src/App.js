import React from "react";
import "./App.css";
import UserItem from './components/UserItem';
import UserForm from "./components/UserForm";
import { connect } from 'react-redux';
import action from './store/action';

class App extends React.Component {

  addUser = (newUser) => {
    this.props.action('addUser', newUser)
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
            {this.props.users.map((itm, i) => <UserItem key={i} user={itm} />)}
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
  action: action
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
