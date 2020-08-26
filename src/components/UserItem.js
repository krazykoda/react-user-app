import React from "react";

class UserItem extends React.Component {
  // You can also do - "class UserList extends Component",
  // just that you'd have to import React this way -
  // import React, {Component} from "react".

  render() {
    const {name, email} = this.props.user
    return (
      <div className="user-list">
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    );
  }
}

export default UserItem;
