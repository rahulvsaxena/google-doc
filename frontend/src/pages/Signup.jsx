import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userExists, setUserExists] = useState("");
    const navigate=useNavigate();
    const handleSignUp = async (e) => {
        try {
          await axios.post("http://localhost:8080/user/signup", {
            name,
            email,
            password,
          });
          navigate("/user/login");
          console.log("Signup successful!");

        } catch (error) {
          console.error(error.response.data.message);
          setUserExists("user exists");
        }
      };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100vh'}}>
        <div className="d-flex flex-column align-items-center justify-content-center bg-light p-1 rounded" style={{width: '500px'}}>
  <h2 className='m-3'>Excited for you to join us 🎉</h2>
  <div className="d-flex flex-column align-items-center">
    <input
    type="Name"
    className="form-control my-1 mx-10"
    placeholder="Name"
    style={{width: '410px'}}
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    <input type="email"
    className="form-control my-1 mx-10"
    placeholder="Email"
    style={{width: '410px'}}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <input
    type="password"
    className="form-control my-1 mx-2"
    placeholder="Password"
    style={{width: '410px'}}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <button
    className="btn btn-primary m-2"
    style={{width: '410px'}}
    onClick={handleSignUp}
    >
    Signup
    </button>
    <p style={{ color: 'red', fontSize: 'small' }}>{userExists}</p>
  </div>
</div>
    </div>
  );
}

export default Signup;
