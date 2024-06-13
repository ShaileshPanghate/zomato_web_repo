import React from 'react'
import { useState } from 'react';
import '../App.css';
import Nav from '../Component/Nav';
import Fot from '../Component/footer'

const LogIn = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let obj = {
    name: name,
    email: email,
    password: password
  }
  var formSubmitted = function (event) {
    event.preventDefault();
    if(obj.name === "" || obj.email === "" || obj.password === "")
    {
      alert("Please fill all required fields")
    }
    else{

      console.log(obj);
      alert("You are logged in successfully")
      localStorage.setItem( "user", JSON.stringify(obj)  );
      setName("");
      setEmail("");
      setPassword("");
      window.location.href = "/";
    }

// userData = localStorage.getItem("user");  to get stored data from localStorage

  }
  return (
    <div>
     <div>
      <Nav />
      </div>
      <form >
      <h1>Login Form</h1>
        <div className='formSection'>
        <label>Name : </label>
        <input type="text" name="name" value={name} placeholder="Enter your name" onChange={(event) => setName(event.target.value)} required/><br/><br/>
        <label>Email : </label>
        <input type="text" name="email" value={email} placeholder="Enter your Email" onChange={(event) => setEmail(event.target.value)} required/><br/><br/>
        <label>Password : </label>
        <input type="password" name="name" value={password} placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} required/><br/><br/>

        <button onClick={formSubmitted} className="button">Submit</button>
        </div>
      </form>
      <div>
        <Fot />
      </div>
    </div>
  )
}

export default LogIn
