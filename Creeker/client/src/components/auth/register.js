import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../modules/UserManager";

export const Register = ({setIsLoggedIn}) => {
  // Create state variables for each field
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [imageLocation, setImageLocation] = useState("");



  const navigate = useNavigate()
  
  // This function runs when the user clicks submit
  const registerNewUser = (e) => {
  e.preventDefault();
  const newUser = {
  firstName: firstName,
  lastName: lastName,
  userName: userName,
  password: password,
  email: email,
  imageLocation: imageLocation
  }
    register(newUser)
    .then(() => {
        navigate("/login")

    });
  };

  return (
    <>
    <h2>Register</h2>
      <form>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
        />
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Display Name"
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="hidden"
          onChange={(e) => setImageLocation(e.target.value)}
          placeholder="Image"
        />
        <button type="submit" onClick={registerNewUser}>
          Register
        </button>
      </form>
    </>
  );
};