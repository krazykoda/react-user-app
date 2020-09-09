import React from "react";
import { Link } from "react-router-dom";

class UserItem extends React.Component {
  // You can also do - "class UserList extends Component",
  // just that you'd have to import React this way -
  // import React, {Component} from "react".

  render() {
    const {name, email } = this.props.user
    const { delUser, id } = this.props

    return (
      <div className="user-list">
        <h2>{name}</h2>
        <h3>{email}</h3>
        <Link to={`/edit/${id}`} >
          <button>Edit</button>
        </Link>
        <span>   </span>
        <button onClick={() => delUser(id) } >Delete</button>
      </div>
    );
  }
}

export default UserItem;
