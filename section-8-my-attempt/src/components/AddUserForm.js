import React, { useState } from "react";
import Modal from "react-modal";

const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

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

    if (isNaN(userData.age) || userData.username === "") {
      openModal();
    } else {
      props.onSaveUserData(userData);
    }

    // clear the form after submission by using two way binding
    resetFormContents();
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} contentLabel="Error">
        <p>You entered bad things.</p>
        <button onClick={closeModal}>close</button>
      </Modal>
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
