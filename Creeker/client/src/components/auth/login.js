import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../modules/UserManager";


export const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({ email, password })
      .then(r => {
         if (r) {  
          //if a user is active, navigate into application
          setIsLoggedIn(true)
          navigate('/')
        }
        else { 
          // invalid email or password
          alert("Invalid email or password")
        }
      })
  };

  return (
    <div className="m-5">
      <Form onSubmit={loginSubmit}>
        <fieldset>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Button>Login</Button>
          </FormGroup>
          <em>
            Not registered? <Link to="/register">Register</Link>
          </em>
        </fieldset>
      </Form>
    </div>
  );
}