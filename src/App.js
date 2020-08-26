import React from "react";
import "./App.css";
import UserItem from './components/UserItem'
import UserForm from "./components/UserForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  addUser = (newUser) => {
    this.setState({users:[...this.state.users, newUser]})
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
            {this.state.users.map((itm, i) => <UserItem key={i} user={itm} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
