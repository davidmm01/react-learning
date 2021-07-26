import React from "react";
import User from "./User";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UserList;
