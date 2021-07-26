import React, { useState } from "react";

import "./App.css";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    setUsers((prevUsers) => {
      return [userData, ...users];
    });
  };

  return (
    <div className="App">
      <AddUserForm onSaveUserData={saveUserDataHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
