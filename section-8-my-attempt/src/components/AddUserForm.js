import React, { useState } from "react";

const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const resetFormContents = () => {
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // stop page reload on form submit by not sending request

    const userData = {
      username: enteredUsername,
      age: +enteredAge,
    };

    props.onSaveUserData(userData);

    // clear the form after submission by using two way binding
    resetFormContents();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangedHandler}
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="text" value={enteredAge} onChange={ageChangedHandler} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
