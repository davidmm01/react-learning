import React from "react";

const User = (props) => {
  return (
    <div>
      {props.username} ({props.age} years old)
    </div>
  );
};

export default User;
